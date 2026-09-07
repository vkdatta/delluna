export const name="text-h-three-light";
export const id="dl_c134367c9dd04b1ebe4b";
export const url=new URL("../icons/T/text-h-three-light.svg?v=72cb9e32fb560d5e11fca41e290ade9af9a64ccb1bf7ef1b8ca4d7c5c884f523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
