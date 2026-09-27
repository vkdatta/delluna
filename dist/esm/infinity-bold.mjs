export const name="infinity-bold";
export const id="dl_d80ccf5a0b074477a4fb";
export const url=new URL("../icons/infinity-bold.svg?v=ba64aa1df605c3b9c2004423eab2501194170d0be832a3507b0fc629d6f960e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
