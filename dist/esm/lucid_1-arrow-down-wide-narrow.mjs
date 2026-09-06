export const name="lucid_1-arrow-down-wide-narrow";
export const id="dl_e085e3f8c5dc4b08a690";
export const url=new URL("../icons/lucid_1-arrow-down-wide-narrow.svg?v=df412f5decc2567ac5a59ee4b6a30be32d47579283e4367470e9a479a59d0a94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
