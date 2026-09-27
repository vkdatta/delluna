export const name="10k";
export const id="dl_c08eb109813bda19ab5e";
export const url=new URL("../icons/10k.svg?v=5212c75ae8161e6c4ffa6dc8ec6f32e6e7a7eb3f8219a49370bfd86f67661af4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
