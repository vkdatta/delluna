export const name="lucid_1-circle-x";
export const id="dl_b0b670126ab54e2296d9";
export const url=new URL("../icons/lucid_1-circle-x.svg?v=b39fc25e53decade216db5bf39553468b5e99af7ab6e0c5bc3065b906f68b695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
