export const name="sword_rose";
export const id="dl_863c0393f0f782fc4456";
export const url=new URL("../icons/sword_rose.svg?v=a875fc0e72216a9375fa02869f488a316783075813cc2bb5dbf104a77c3b681b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
