export const name="lucid_3-slash";
export const id="dl_84c8a399d0224beb92e9";
export const url=new URL("../icons/lucid_3-slash.svg?v=cdafff1556d3d26f997706c5c4aba7885b0d622ed4c45080a6453a8e1b8057a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
