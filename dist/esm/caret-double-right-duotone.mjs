export const name="caret-double-right-duotone";
export const id="dl_05180ee2b3004019b0af";
export const url=new URL("../icons/caret-double-right-duotone.svg?v=4b19e26a367872359bc6d82a5774288774de8a43ceb441b6ba507c12844d45fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
