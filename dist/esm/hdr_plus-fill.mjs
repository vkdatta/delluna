export const name="hdr_plus-fill";
export const id="dl_9f4af22cdab2da8307cb";
export const url=new URL("../icons/hdr_plus-fill.svg?v=b6da16dbc23c55523c3f6c071a228e0004c84b82ae4c0481d7901ae8ad0fa3c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
