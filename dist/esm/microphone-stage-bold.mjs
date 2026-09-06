export const name="microphone-stage-bold";
export const id="dl_800394a330f44ff8876d";
export const url=new URL("../icons/microphone-stage-bold.svg?v=707395fb1c9a90bb9daf8166855cc8696e9ed3fea48d32def0cc3a5629a78f25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
