export const name="ghost";
export const id="dl_dac37bbc146a4f94ada3";
export const url=new URL("../icons/ghost.svg?v=493a9cabd0c903a8d02b5b369a74911e5d739e761774864dafab2d550b5ec2fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
