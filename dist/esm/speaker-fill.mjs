export const name="speaker-fill";
export const id="dl_bc1c5028ba474fbf9801";
export const url=new URL("../icons/speaker-fill.svg?v=2988d47701beeb69848e60571084c8241613e7f7bc32a2f10ca81fad7c92d86b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
