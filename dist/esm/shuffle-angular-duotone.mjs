export const name="shuffle-angular-duotone";
export const id="dl_72871947d5e1a78fe889";
export const url=new URL("../icons/shuffle-angular-duotone.svg?v=b86d53aa69c9534fca85c435b3556581f5a95e1e67eb412280bc2f10f492918c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
