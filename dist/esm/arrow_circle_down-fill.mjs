export const name="arrow_circle_down-fill";
export const id="dl_17333fa52243472c8f00";
export const url=new URL("../icons/arrow_circle_down-fill.svg?v=6ac9749a5d6501dc59f881cad3a468cb73e8162849a0d5f912c7c52343a584dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
