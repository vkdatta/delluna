export const name="integral";
export const id="dl_49ea990f4bb048bab2af";
export const url=new URL("../icons/integral.svg?v=b9ece88d1554ccae66af2efd77a3c40d01ca8b16f7c41d14919210f3c3defbed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
