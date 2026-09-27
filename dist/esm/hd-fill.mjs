export const name="hd-fill";
export const id="dl_64adbd2009562e11c53d";
export const url=new URL("../icons/hd-fill.svg?v=96b67766c1d6cfc90bd35ce920a8492341f503fe0caab438b3b7afc43124280b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
