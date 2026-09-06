export const name="number-square-three-duotone";
export const id="dl_833e15ab6d714452b47a";
export const url=new URL("../icons/number-square-three-duotone.svg?v=a904a149b34d4dccc421d1407d6f37e7431b8f3b82c1c1072ce4ab46c00e51c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
