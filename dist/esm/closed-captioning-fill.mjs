export const name="closed-captioning-fill";
export const id="dl_dbd22d3475e64a08bf4b";
export const url=new URL("../icons/closed-captioning-fill.svg?v=5756eb411d9de6919225da74136f336a52031daee99f36a79dcc843c38e2b6ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
