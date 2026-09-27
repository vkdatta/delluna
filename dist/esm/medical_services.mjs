export const name="medical_services";
export const id="dl_d669b4532a5c75d91304";
export const url=new URL("../icons/medical_services.svg?v=89946a2bd5dc5f5525a6a43007832702b2bbfa0afca3c9254be08638ca3239d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
