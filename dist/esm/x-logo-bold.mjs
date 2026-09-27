export const name="x-logo-bold";
export const id="dl_3adb92061fe49b0ce6ee";
export const url=new URL("../icons/x-logo-bold.svg?v=462f66618a36db3a60b73cdd79f0cdfbf269a527666b9e85ccce21a0ecbe945a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
