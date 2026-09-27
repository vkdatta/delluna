export const name="file-sql";
export const id="dl_471c77335c6949c79dcf";
export const url=new URL("../icons/file-sql.svg?v=429d39ac660668578b6323faa557d7157a9e1cbfa546d7fc12246ddbb6396bdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
