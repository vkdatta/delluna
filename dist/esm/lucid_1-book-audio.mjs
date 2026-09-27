export const name="lucid_1-book-audio";
export const id="dl_065389fca36a47e98b05";
export const url=new URL("../icons/lucid_1-book-audio.svg?v=3ec749457ca4021ab82e7d0bc02d1836899371ac57b858e226afa716668fd907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
