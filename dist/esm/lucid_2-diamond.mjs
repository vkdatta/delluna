export const name="lucid_2-diamond";
export const id="dl_cafbbf7576f845f6b073";
export const url=new URL("../icons/lucid_2-diamond.svg?v=dd7f97f8d14bae12db6c2eea2b61e0cd7d33f0dfa5b5f231f7c74231937b50d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
