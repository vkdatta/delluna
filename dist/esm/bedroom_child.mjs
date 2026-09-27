export const name="bedroom_child";
export const id="dl_968261009ae2e3c0ae55";
export const url=new URL("../icons/bedroom_child.svg?v=bae4e2fba6f2d5a52f8c13df701bafae3c40db03e35c8804e0453e6448463b1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
