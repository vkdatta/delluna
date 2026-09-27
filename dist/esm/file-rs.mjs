export const name="file-rs";
export const id="dl_1f788dde1d5c431080c8";
export const url=new URL("../icons/file-rs.svg?v=45fa62d96938d716b9dafd42dfaffb14d0d7f1c1da05c87bb865f10b4515aa66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
