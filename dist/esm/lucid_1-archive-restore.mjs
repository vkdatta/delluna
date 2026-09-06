export const name="lucid_1-archive-restore";
export const id="dl_3c9427ec62294c9a844d";
export const url=new URL("../icons/lucid_1-archive-restore.svg?v=8560dff1d82424978e506ab71f677ddd927b05be95eb95a2e455d78e2560f561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
