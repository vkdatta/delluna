export const name="vinyl-record-thin";
export const id="dl_2df903856f71489c847a";
export const url=new URL("../icons/V/vinyl-record-thin.svg?v=0269f8a0e366d41b1dde9d403107dc36f402d13c2cd9bcc2321a2a642530d7ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
