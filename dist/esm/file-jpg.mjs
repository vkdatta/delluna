export const name="file-jpg";
export const id="dl_93050cdb6842496bbb32";
export const url=new URL("../icons/file-jpg.svg?v=c43b6daf5e6c7ec2e404063abc64dea0648886fec6d853127d29239197d562f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
