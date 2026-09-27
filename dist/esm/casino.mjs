export const name="casino";
export const id="dl_3e34c475c5765f77fee2";
export const url=new URL("../icons/casino.svg?v=19637f7b2a6c0e7583955f0e210336009bf3617549b42845b524abd53a89c3c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
