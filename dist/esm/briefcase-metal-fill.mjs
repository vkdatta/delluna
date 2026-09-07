export const name="briefcase-metal-fill";
export const id="dl_8e9366e98a1a460a8aaa";
export const url=new URL("../icons/briefcase-metal-fill.svg?v=0a546ecc11569784d99756d8993dc3ec9e54a26b84084509893bba97f68311bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
