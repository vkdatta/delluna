export const name="lucid_1-ad";
export const id="dl_5e99f4d039b64157825c";
export const url=new URL("../icons/lucid_1-ad.svg?v=83215b24fe89d7fd056cf51fbf9cb1643e1c1b572d80c2537e4795830c715ac2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
