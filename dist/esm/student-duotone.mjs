export const name="student-duotone";
export const id="dl_59cf4cde24c22db393c7";
export const url=new URL("../icons/student-duotone.svg?v=920acb6842adc276ae2eaf618b72beecc334ddfcab4eece4cd539eae4c6078ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
