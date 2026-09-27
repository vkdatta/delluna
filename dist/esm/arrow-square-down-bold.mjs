export const name="arrow-square-down-bold";
export const id="dl_31928d9ac65a473b8f8d";
export const url=new URL("../icons/arrow-square-down-bold.svg?v=e211b5898a2559aa939520ed7fe235cfff1656b6394a768c324336ba242d1301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
