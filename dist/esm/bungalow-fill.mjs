export const name="bungalow-fill";
export const id="dl_160b235b8da3d36bab22";
export const url=new URL("../icons/bungalow-fill.svg?v=117f155809eec543bb514607faf733f7e9fb35d661688ffb17459dc21462c57d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
