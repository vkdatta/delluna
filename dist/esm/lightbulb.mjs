export const name="lightbulb";
export const id="dl_66440e734ace4221b8eb";
export const url=new URL("../icons/lightbulb.svg?v=cc50aa89162107ff501fc4423fcbcb0e2faa40f088f0b47721f370d90e7012b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
