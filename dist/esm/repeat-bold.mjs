export const name="repeat-bold";
export const id="dl_931d6f3a94bc4a029dca";
export const url=new URL("../icons/repeat-bold.svg?v=ad1504b3a78c67ed08fc72bb4bae4bf1b3af57aac7f258e9f73f23481bca3789",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
