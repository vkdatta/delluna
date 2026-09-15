export const name="flag_check";
export const id="dl_0109cb0ad93245b88fd0";
export const url=new URL("../icons/F/flag_check.svg?v=b238117c85bf6e63a9257e97e11bba4f8eabbadf7b9f8943426dfaa01a4abbb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
