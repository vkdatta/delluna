export const name="lucid_1-alarm-smoke";
export const id="dl_5e80bbf048104de0932d";
export const url=new URL("../icons/lucid_1-alarm-smoke.svg?v=3d26122970c73274e1d70d9b908d4c33020ae5c4038de80d0a9bf880508ade61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
