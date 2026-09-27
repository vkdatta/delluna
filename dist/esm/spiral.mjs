export const name="spiral";
export const id="dl_7022c832c3464a689bb2";
export const url=new URL("../icons/spiral.svg?v=e1f7daeac3b999658dfa278f3d108bc45e723fa548f59b0ecb534f6f7ae509bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
