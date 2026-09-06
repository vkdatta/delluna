export const name="file-sql";
export const id="dl_471c77335c6949c79dcf";
export const url=new URL("../icons/file-sql.svg?v=0b8f050acc33b606e13f59dc3494756310230a97d8da7c2fd0ca2965e62650be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
