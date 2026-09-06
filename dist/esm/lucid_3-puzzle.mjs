export const name="lucid_3-puzzle";
export const id="dl_3b0c7b7a484c4e6e8251";
export const url=new URL("../icons/lucid_3-puzzle.svg?v=595e2fad04685e4918fdb65c7090b502d5f85fb6ba48c220fb59a0917b05b1c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
