export const name="alternate_email";
export const id="dl_a12548ec2186b8f24161";
export const url=new URL("../icons/alternate_email.svg?v=d32f739d6c4a827ca1ec7014a1ac4ab675e5f4e72e1103d25aec6109e15af49c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
