export const name="invoice-light";
export const id="dl_42a7bf4c1a3e4ebb920d";
export const url=new URL("../icons/invoice-light.svg?v=126471f09af6c483920c32c3a3f653869053bb4062ea03e8240d6b3d38c5d1f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
