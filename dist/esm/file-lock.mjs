export const name="file-lock";
export const id="dl_83573da77cfb4be08a57";
export const url=new URL("../icons/file-lock.svg?v=eafe27493bf81e15947b74a3f9780b58917e1647e2b18fe39c44da3367b0fd67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
