export const name="wave-sine-fill";
export const id="dl_a981ef4eb4c34c80d852";
export const url=new URL("../icons/wave-sine-fill.svg?v=5fd95ed44087db48a8dd942ea7f7ebac080f206e1673f13c1a92751a959a9632",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
