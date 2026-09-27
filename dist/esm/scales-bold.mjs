export const name="scales-bold";
export const id="dl_e2f921c31b08a45aaa4c";
export const url=new URL("../icons/scales-bold.svg?v=b126fa02449fbbb2293f4cc6609e1323ab2e15d1249d470121d5d1e078b17cb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
