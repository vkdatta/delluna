export const name="hand-eye-light";
export const id="dl_8a7e365a6d984d7dab7b";
export const url=new URL("../icons/hand-eye-light.svg?v=b3784839b345667a8111adceb612c64df8bf2ec56a29f1cc3cc7d0c0eddf2565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
