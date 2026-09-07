export const name="truck-fill";
export const id="dl_6b2973d6e62f45cebe61";
export const url=new URL("../icons/T/truck-fill.svg?v=90a19738e1b64bb697d0f6d1fc9a506d3d5325c2b173ca08427ba2093bc7d89a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
