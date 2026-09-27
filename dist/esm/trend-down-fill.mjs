export const name="trend-down-fill";
export const id="dl_092e58a9888be1d60401";
export const url=new URL("../icons/trend-down-fill.svg?v=c39c783c9c5e85a13e5364b445f01dd8eacd0e1138c3f8432991cd2f8c04a737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
