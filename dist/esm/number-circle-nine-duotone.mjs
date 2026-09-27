export const name="number-circle-nine-duotone";
export const id="dl_e3f1c8f882274225a24b";
export const url=new URL("../icons/number-circle-nine-duotone.svg?v=9834b6e457c8f54818bd8a0eb0dc5178846920ece73b711409a983c283038c2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
