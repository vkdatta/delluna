export const name="lucid_1-beaker";
export const id="dl_8e9cbfb3c2c344ecb8a8";
export const url=new URL("../icons/lucid_1-beaker.svg?v=d73fcb8b967c4522fe91bba2ff91985b83333b0a3e5ae6c33b0f911fad0f2289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
