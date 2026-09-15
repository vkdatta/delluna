export const name="cannabis";
export const id="dl_8dfb58c4b4904ce5a5f1";
export const url=new URL("../icons/C/cannabis.svg?v=9afc15504a4cc6451993d66b3faf41709d88e52f95ed79b62385df67b8eb8ca1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
