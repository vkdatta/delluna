export const name="water_do";
export const id="dl_5bc815484016b2cd5463";
export const url=new URL("../icons/water_do.svg?v=74695761aa69c9f8c149a5b36e5328995fc67984528ceda1dc7785b44cb11c9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
