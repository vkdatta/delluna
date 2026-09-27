export const name="speaker-simple-x-bold";
export const id="dl_b8cf6cc054869a0fd20b";
export const url=new URL("../icons/speaker-simple-x-bold.svg?v=bc73c8b83a65a609fe916dd565d761d6788e384b38394f1a89e4ed6f76af2fd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
