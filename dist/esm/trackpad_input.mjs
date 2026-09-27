export const name="trackpad_input";
export const id="dl_327b2f51505d25886847";
export const url=new URL("../icons/trackpad_input.svg?v=f36c73480ec65716d91ff94fbdbe59e46250cbff25f6ce32666c461473c5758d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
