export const name="lucid_3-pilcrow-left";
export const id="dl_997cb987f98b4f45b2bf";
export const url=new URL("../icons/lucid_3-pilcrow-left.svg?v=2e8428351ae6dc668a35456e8d8dabaf75bcd2ee325a7f6a35bd865781bdafda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
