export const name="person_play-fill";
export const id="dl_9a0426ce68cae3546b16";
export const url=new URL("../icons/person_play-fill.svg?v=86759697cf288079a15308fc25e927d7fec9d17a4bb9783e8513235ea2dbbab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
