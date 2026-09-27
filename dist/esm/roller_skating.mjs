export const name="roller_skating";
export const id="dl_9bfd695ead923a2533c5";
export const url=new URL("../icons/roller_skating.svg?v=6dd796a368decffc3a2359a901b0d25e1d850aac51efaf2611c5c4972ffe537e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
