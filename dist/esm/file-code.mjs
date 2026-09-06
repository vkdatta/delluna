export const name="file-code";
export const id="dl_549a5e6418b94419b742";
export const url=new URL("../icons/file-code.svg?v=41566f7e1917e5d6d7520fd133a5905bd6b809453acca2d1203600a531a57180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
