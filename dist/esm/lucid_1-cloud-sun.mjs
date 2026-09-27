export const name="lucid_1-cloud-sun";
export const id="dl_0f21d7c621704c75b3b9";
export const url=new URL("../icons/lucid_1-cloud-sun.svg?v=9c4d31918a0d64a9b2ba15609ef8ae53a673519e2f850a0074012ac6286b5f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
