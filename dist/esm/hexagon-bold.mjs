export const name="hexagon-bold";
export const id="dl_d8502fe37b664974a28e";
export const url=new URL("../icons/hexagon-bold.svg?v=5741a19e8417f157cd2a83f5c300ce1a0d19f98cfc211213653fe2d96f56dd63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
