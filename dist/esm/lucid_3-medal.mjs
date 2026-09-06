export const name="lucid_3-medal";
export const id="dl_75912f7af3ef4f368fec";
export const url=new URL("../icons/lucid_3-medal.svg?v=e289ceb641105d8116ec722e597a0cadc23833f1648c431c667e4c5808082011",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
