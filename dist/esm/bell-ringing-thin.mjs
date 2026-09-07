export const name="bell-ringing-thin";
export const id="dl_cdf47bee88f04ac29402";
export const url=new URL("../icons/bell-ringing-thin.svg?v=882339c43874ad1fce50493ea8ed55efd8674945145795e2b1c2d29fe6282897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
