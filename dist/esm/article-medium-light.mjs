export const name="article-medium-light";
export const id="dl_92bdd0efb9eb40ccb764";
export const url=new URL("../icons/article-medium-light.svg?v=68889a52c812b561e3efa81bff6898e1829650c0aa3c760612da1c4712cb7344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
