export const name="police-car-fill";
export const id="dl_832845c4734e4a1aa43e";
export const url=new URL("../icons/police-car-fill.svg?v=441d06f0425d58ff0de48a319d06ecd777bd763744b673724ad2883a873fabed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
