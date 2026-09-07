export const name="heartbeat-bold";
export const id="dl_79e04e960a3e4da9b11b";
export const url=new URL("../icons/heartbeat-bold.svg?v=5ee02dcc9d395470840dc44e4b73fa337ca168e897294890291f5e3a6ef7162b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
