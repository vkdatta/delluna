export const name="keep-fill";
export const id="dl_e88a4ec2fb4645e68dc0";
export const url=new URL("../icons/K/keep-fill.svg?v=4e14a00b57006cd7de57acf2a2710359b75c7db656f269d59b5e7e919bf6e1f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
