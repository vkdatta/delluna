export const name="adf_scanner";
export const id="dl_873243cc939c42528f03";
export const url=new URL("../icons/adf_scanner.svg?v=fb9727c6fe8964831e1911595624c280afe65a996225287b57e1b9d999d1074f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
