export const name="bell-simple-ringing-duotone";
export const id="dl_7603bf096eea46acb7aa";
export const url=new URL("../icons/bell-simple-ringing-duotone.svg?v=bc4886c772cc23437b16d72f001ad1e39c2ab2334147b16e26cd6060f973ef7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
