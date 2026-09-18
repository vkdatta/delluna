export const name="toll-fill";
export const id="dl_f83cb9c76c064a869a25";
export const url=new URL("../icons/T/toll-fill.svg?v=7ab1179058703d8fefbcbb2ec4580ab1d7a0246ab8c70834e9a551f78a0b7992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
