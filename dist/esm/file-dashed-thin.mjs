export const name="file-dashed-thin";
export const id="dl_69175d763e9a46a69945";
export const url=new URL("../icons/file-dashed-thin.svg?v=efa05939d8136d82a2573fa6ebdbb49de4b77b36e5dbdcae04a5abdf4f425085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
