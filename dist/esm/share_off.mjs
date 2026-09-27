export const name="share_off";
export const id="dl_51e5650ef4875339be7e";
export const url=new URL("../icons/share_off.svg?v=535788eca79cd69a52b3d20c0a5391113123d51809c295ffb31bd6a05d8bb2c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
