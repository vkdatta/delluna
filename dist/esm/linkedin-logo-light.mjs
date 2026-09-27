export const name="linkedin-logo-light";
export const id="dl_c7352c2e96df44f7a106";
export const url=new URL("../icons/linkedin-logo-light.svg?v=3ad0eae9051f10dd9c1c6fe1359289c1783a425ed8016a8ac8e88914cc050882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
