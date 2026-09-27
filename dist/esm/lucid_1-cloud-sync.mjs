export const name="lucid_1-cloud-sync";
export const id="dl_d0ea3b78009640a1b672";
export const url=new URL("../icons/lucid_1-cloud-sync.svg?v=58973a5fdf598cd5eb43cbff9026edf2c178153be38688b87bcad8ac01640e9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
