export const name="lucid_3-pen-line";
export const id="dl_35624e25db8c4b0d8561";
export const url=new URL("../icons/lucid_3-pen-line.svg?v=f2f2033f5ca1505f91f6795e653af284a683e967f3f8ec70b897c42a8fed1ead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
