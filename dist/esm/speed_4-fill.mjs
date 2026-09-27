export const name="speed_4-fill";
export const id="dl_6c9b375629756855302a";
export const url=new URL("../icons/speed_4-fill.svg?v=fe8500c2e86e1c0baf2711cb267ffe1f34dd774df097d90a14cfa43e85a2ec62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
