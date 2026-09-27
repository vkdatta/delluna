export const name="file-archive";
export const id="dl_a0607eacc27147bd9707";
export const url=new URL("../icons/file-archive.svg?v=bc733f1e38c8609091b5ce58c293aaa79c3ded91aba5f9951057e404df3877ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
