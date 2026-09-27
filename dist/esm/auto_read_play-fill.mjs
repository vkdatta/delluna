export const name="auto_read_play-fill";
export const id="dl_dfdb7bb34cd2c1f8ff6e";
export const url=new URL("../icons/auto_read_play-fill.svg?v=bf9772d847d90069646f2d608bc1d80c4d78dc134740323abf80aabac199daf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
