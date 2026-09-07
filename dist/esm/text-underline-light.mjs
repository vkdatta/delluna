export const name="text-underline-light";
export const id="dl_f3a0eb4180de433d8e05";
export const url=new URL("../icons/T/text-underline-light.svg?v=b500bb5cb57952aac307ecba48c45ce86047cd60448350b51fb34d766210f977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
