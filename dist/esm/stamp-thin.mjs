export const name="stamp-thin";
export const id="dl_c84b98c3da7756b829f1";
export const url=new URL("../icons/stamp-thin.svg?v=ca867cf775e8756436c22fb752ac2444491adc1fe2eb647e307063691a7ea6e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
