export const name="lucid_3-merge";
export const id="dl_27af7f72f8914c558c9e";
export const url=new URL("../icons/lucid_3-merge.svg?v=eb28c63d5c0f6482b5f632d019302bc2666b0b55cd537e5979ef6d9bd75abf53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
