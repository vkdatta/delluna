export const name="shrimp-light";
export const id="dl_24c94489be26a063e29b";
export const url=new URL("../icons/shrimp-light.svg?v=d5f2fb94bff0783f2bcb36905fdfd969840aa39688483dca01e2854c5a03c513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
