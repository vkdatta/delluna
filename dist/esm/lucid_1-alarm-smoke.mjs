export const name="lucid_1-alarm-smoke";
export const id="dl_5e80bbf048104de0932d";
export const url=new URL("../icons/lucid_1-alarm-smoke.svg?v=9d81d0811cdab63ea660b4bfdd80e9fbeec137b8c57d3b915c4fb005c77feb5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
