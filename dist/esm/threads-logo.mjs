export const name="threads-logo";
export const id="dl_3cbbbf7ec5f81d12ef3a";
export const url=new URL("../icons/threads-logo.svg?v=dcfba2309d8194bf1ca1d26b081e29aafcb7ab9673c564edd2692cde9f94eec6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
