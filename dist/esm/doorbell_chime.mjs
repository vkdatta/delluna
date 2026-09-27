export const name="doorbell_chime";
export const id="dl_678ebcd065289a7aa801";
export const url=new URL("../icons/doorbell_chime.svg?v=b08b6ca3837c5eee00b9d44e0e4e5349eb1e62dec1339bfcd8effc22a26680a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
