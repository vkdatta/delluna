export const name="wifi_home";
export const id="dl_084c6c48c2914d98b5ee";
export const url=new URL("../icons/W/wifi_home.svg?v=b467488ef412a744ec93fb27133e0f0c8623ac0580fa4d2319f08ddb473c92c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
