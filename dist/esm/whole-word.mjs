export const name="whole-word";
export const id="dl_a400e9d373b64fb2988f";
export const url=new URL("../icons/whole-word.svg?v=79c590ce672f1b3db1159960f2291228fa2a91519dc08bc30ee4f6b2f0bfdedd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
