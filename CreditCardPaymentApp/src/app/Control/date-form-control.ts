import { FormControl } from "@angular/forms";
export class DateFormControl  extends FormControl{
  override setValue(value: any, options?: { onlySelf?: boolean | undefined; emitEvent?: boolean | undefined; emitModelToViewChange?: boolean | undefined; emitViewToModelChange?: boolean | undefined; } | undefined): void {
    if(!value){
      super.setValue('',{...options,emitModelToViewChange:true});
      return;
    }

    if(value.length==2){
      super.setValue(value +'/',{...options,emitModelToViewChange:true});
      return;
    }
    super.setValue(value,{...options,emitModelToViewChange:true});
  }
}
