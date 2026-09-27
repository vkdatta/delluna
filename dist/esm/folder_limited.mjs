export const name="folder_limited";
export const id="dl_20b7357035bc799e3842";
export const url=new URL("../icons/folder_limited.svg?v=43aa1a20c7e4d71be6f0ea7994747c6f21ed20b158bdf6fcb2e77d49b2ed6e62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
