export const name="speaker_3";
export const id="dl_c5955c8d29e3f00b717a";
export const url=new URL("../icons/speaker_3.svg?v=eef3946d8d4df149af9a8dbe5905c0aeba2f37112e378313744480834dd7da67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
