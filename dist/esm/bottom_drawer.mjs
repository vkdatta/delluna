export const name="bottom_drawer";
export const id="dl_a93e47faba5347fbbde2";
export const url=new URL("../icons/B/bottom_drawer.svg?v=c1bc576fdf71238f49047c305040abac6412900b70771ad93481818b58090e5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
