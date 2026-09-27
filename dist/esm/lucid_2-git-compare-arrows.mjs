export const name="lucid_2-git-compare-arrows";
export const id="dl_3ce9c436200349f3a8f7";
export const url=new URL("../icons/lucid_2-git-compare-arrows.svg?v=ce2ae22ac613b96a319c29da0531f123e966061e485191ea1eca8f967dff1af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
