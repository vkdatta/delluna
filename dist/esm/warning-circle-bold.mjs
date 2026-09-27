export const name="warning-circle-bold";
export const id="dl_03ced8632e34243c64bc";
export const url=new URL("../icons/warning-circle-bold.svg?v=44622014b9675e71d264f1d5f588b99c81cd4aa6dbc905976084a5b9739dff30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
