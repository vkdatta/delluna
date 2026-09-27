export const name="sensors_krx_off";
export const id="dl_99ce3cd75769aa32ef0a";
export const url=new URL("../icons/sensors_krx_off.svg?v=7ad39934427d55b4014ea3b48fff41423b97107f533ebcff8b36faa7af33fb60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
