export const name="lamp-thin";
export const id="dl_5374a0d9fb974d91a8c1";
export const url=new URL("../icons/lamp-thin.svg?v=1d4349fd9b8a11302125611ff5550e7e20b171c428cdd5fda2d7266906d36b7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
