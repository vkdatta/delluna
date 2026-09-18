export const name="tab_group";
export const id="dl_4074b5122a4d4a588129";
export const url=new URL("../icons/T/tab_group.svg?v=a9427aadc866a87561e2928a561eb4fab6cdf63023466f9242494c1abaaa5417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
