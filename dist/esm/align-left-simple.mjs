export const name="align-left-simple";
export const id="dl_dd973dd371f44c74a5e8";
export const url=new URL("../icons/align-left-simple.svg?v=82f45f0640a0cfcfd4d3f37d697d492b4b5cf27b05931bdd400bb9ee2da9f894",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
