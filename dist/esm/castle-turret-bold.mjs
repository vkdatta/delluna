export const name="castle-turret-bold";
export const id="dl_8b294678cee54000bd39";
export const url=new URL("../icons/castle-turret-bold.svg?v=546c9ddce18486c1935428f3aae4a36326256a22cdd3aaf31320a03a39e37bcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
