export const name="play";
export const id="dl_daec9a338c1a4e3d9f6b";
export const url=new URL("../icons/play.svg?v=b9706613bb8dd73941398725328e7e9a34f631dec0ab9338d7e28a1499a11f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
