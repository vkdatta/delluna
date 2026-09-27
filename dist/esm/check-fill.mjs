export const name="check-fill";
export const id="dl_3dd09f80d75a628610a8";
export const url=new URL("../icons/check-fill.svg?v=6d7c7bd0a10803e83896ec42de87af93603f7ba8ab47ec786f87dd8a0823ff19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
