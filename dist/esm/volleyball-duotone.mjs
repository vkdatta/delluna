export const name="volleyball-duotone";
export const id="dl_e8ebdbe9c067bcb05391";
export const url=new URL("../icons/volleyball-duotone.svg?v=c7a41923a0f69a8d9e35ef4ec60b71bf0241aea5ee0d4a0c0700c6b489872209",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
