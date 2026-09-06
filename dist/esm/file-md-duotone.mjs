export const name="file-md-duotone";
export const id="dl_29b753b65408441a8703";
export const url=new URL("../icons/file-md-duotone.svg?v=2c09f50754ecfcf11902a5c7dcddd188d52556254d4cee847a28fe7948841689",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
