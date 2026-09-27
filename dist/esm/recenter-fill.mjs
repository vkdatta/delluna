export const name="recenter-fill";
export const id="dl_c761df3b90235b532112";
export const url=new URL("../icons/recenter-fill.svg?v=0a5038bef590dfc896e7ee74a0682c76e90a04ea454c7a2cee9a68c8b5d485c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
