export const name="lucid_1-copy-check";
export const id="dl_1a50b0fb8e184ada9f15";
export const url=new URL("../icons/lucid_1-copy-check.svg?v=0a473bfb2af7be25ccde10f8850f9d213f29461388690a8f51c401531f75d38b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
