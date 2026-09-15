export const name="boy";
export const id="dl_3869b320ed6240c8b716";
export const url=new URL("../icons/B/boy.svg?v=ee45005119b705ac57da1685d6c10b2573c6504ab6f737fd894b8d585f62f50b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
