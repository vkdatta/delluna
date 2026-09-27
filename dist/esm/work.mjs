export const name="work";
export const id="dl_146d7c822a8648e2f730";
export const url=new URL("../icons/work.svg?v=825605123f01fef44135dd4c6162052038d5667238d0876ba61f6a1612fe137f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
