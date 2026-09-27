export const name="medical_services";
export const id="dl_ed454b2328c9bf8455f8";
export const url=new URL("../icons/medical_services.svg?v=234ff494a0b0e7c73164a2a5da6cb4c6bf2a9110352d2790c46bb7182fdd2337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
