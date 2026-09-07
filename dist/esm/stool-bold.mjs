export const name="stool-bold";
export const id="dl_af0b8c8adad64bd594fa";
export const url=new URL("../icons/S/stool-bold.svg?v=59e35ea63e01adfa8bb617724de582abc220d513449745575e013af128f19c44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
