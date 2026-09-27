export const name="lucid_3-play";
export const id="dl_57d57262702f4aa799ec";
export const url=new URL("../icons/lucid_3-play.svg?v=efcec08d90032e96ac696b7cfac23b4a688782c8a92845c90a73870438b14bd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
