export const name="bot";
export const id="dl_811361a8220844e7ba8c";
export const url=new URL("../icons/bot.svg?v=95ab7efe37d0876db41592f11d12f1bc1f29c00e6cd40cda6ff087dd99d12132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
