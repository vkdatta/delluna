export const name="electric_rickshaw";
export const id="dl_91071d300c46b4af3110";
export const url=new URL("../icons/electric_rickshaw.svg?v=51a62101780efa8ad4afb82d0613c7c57c168e2caa9116ee2cb738faae0da30f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
