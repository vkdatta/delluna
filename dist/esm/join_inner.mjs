export const name="join_inner";
export const id="dl_469cdcde1056778e5586";
export const url=new URL("../icons/join_inner.svg?v=cc569e94ae17f2aa19c3a44ef0f8138a72b170d90f40bcdc228dfd3e7730e8fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
