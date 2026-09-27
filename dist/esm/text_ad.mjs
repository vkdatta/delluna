export const name="text_ad";
export const id="dl_b1ed7cef87028a6c7e66";
export const url=new URL("../icons/text_ad.svg?v=51c062d4a64091eab300770d1dafd209187d10ab918a3594e9da2e92ffa0f6ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
