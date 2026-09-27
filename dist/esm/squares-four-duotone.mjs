export const name="squares-four-duotone";
export const id="dl_02e019c87cdb89f21cda";
export const url=new URL("../icons/squares-four-duotone.svg?v=37d2151b7b312c2507f4d87af14add4245265a1dac159a35f09176bb8fa6f32f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
