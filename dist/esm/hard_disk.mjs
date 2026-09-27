export const name="hard_disk";
export const id="dl_892f668696a72a92fb51";
export const url=new URL("../icons/hard_disk.svg?v=a9a7a33a31f81ef64d04275898c8bd945df3e1b76e2612224c0faf554705abb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
