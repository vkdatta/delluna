export const name="local_bar";
export const id="dl_ca950d6f9acb4c6206d0";
export const url=new URL("../icons/local_bar.svg?v=bfbdfbdf12c51d771ab317018642b1e1d91f48fec1bd210a726f36127c783195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
