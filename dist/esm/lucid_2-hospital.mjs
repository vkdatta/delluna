export const name="lucid_2-hospital";
export const id="dl_6dfea996b55b4fafba07";
export const url=new URL("../icons/lucid_2-hospital.svg?v=d1c0981df78393cebda733411bcbdd23b326853d9547697b6dced23661ebbcec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
