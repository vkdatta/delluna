export const name="number-square-three-duotone";
export const id="dl_833e15ab6d714452b47a";
export const url=new URL("../icons/number-square-three-duotone.svg?v=036e05c918a27a2e6882b2eafaa523216807b5878e8e6a502bb19198aabdea97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
