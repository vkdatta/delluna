export const name="swipe_down-fill";
export const id="dl_e9c803646b275ef01ffa";
export const url=new URL("../icons/swipe_down-fill.svg?v=f1d07ff9177c5291dfb1176758c2b0ae11c0fb524c358934409c434aa6e68f38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
