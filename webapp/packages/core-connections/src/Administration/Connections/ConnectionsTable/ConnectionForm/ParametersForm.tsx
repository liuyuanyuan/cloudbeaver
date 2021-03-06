/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { observer } from 'mobx-react';
import styled, { use } from 'reshadow';

import { InputField } from '@cloudbeaver/core-blocks';
import { useTranslate } from '@cloudbeaver/core-localization';
import { useStyles } from '@cloudbeaver/core-theming';

import { formStyles } from './formStyles';
import { IFormController } from './IFormController';

type ParametersFormProps = {
  controller: IFormController;
  embedded?: boolean;
}

export const ParametersForm = observer(function ParametersForm({
  controller,
  embedded,
}: ParametersFormProps) {
  const translate = useTranslate();

  return styled(useStyles(formStyles))(
    <>
      { !embedded && (
        <layout-grid-inner as="div">
          <layout-grid-cell as='div' {...use({ 'span-tablet': 12, 'span-desktop': 7 })}>
            <InputField
              type="text"
              name="host"
              value={controller.config.host}
              onChange={value => controller.onChange('host', value)}
              disabled={controller.isSaving}
              mod='surface'
            >
              {translate('customConnection_custom_host')}
              <sub-label as="div">{translate('customConnection_custom_obligatory')}</sub-label>
            </InputField>
          </layout-grid-cell>
          <layout-grid-cell as='div' {...use({ 'span-tablet': 12, 'span-desktop': 5 })}>
            <InputField
              type="number"
              name="port"
              value={controller.config.port}
              onChange={value => controller.onChange('port', value)}
              disabled={controller.isSaving}
              {...use({ short: true })}
              mod='surface'
            >
              {translate('customConnection_custom_port')}
            </InputField>
          </layout-grid-cell>
        </layout-grid-inner>
      )}
      <group as="div">
        <InputField
          type="text"
          name="databaseName"
          value={controller.config.databaseName}
          onChange={value => controller.onChange('databaseName', value)}
          disabled={controller.isSaving}
          mod='surface'
        >
          {translate('customConnection_custom_database')}
        </InputField>
      </group>
    </>
  );
});
