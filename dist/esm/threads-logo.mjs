export const name="threads-logo";
export const id="dl_cc0f83eb6f3a48808e43";
export const url=new URL("../icons/T/threads-logo.svg?v=dcfba2309d8194bf1ca1d26b081e29aafcb7ab9673c564edd2692cde9f94eec6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
