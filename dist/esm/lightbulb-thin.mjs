export const name="lightbulb-thin";
export const id="dl_4595c6a6718b4428b75a";
export const url=new URL("../icons/lightbulb-thin.svg?v=d78a26114271a3df4d6696df19314c6041ff0f80a67432fa92407f92580ca114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
