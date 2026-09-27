export const name="lucid_1-axe";
export const id="dl_8ab1c97b63c0470ab8c5";
export const url=new URL("../icons/lucid_1-axe.svg?v=5e31a551583f109accfc155a227403b1f5c49318932be122b7442992187412f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
