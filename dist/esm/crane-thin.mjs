export const name="crane-thin";
export const id="dl_7e8ef343ed5d4c139389";
export const url=new URL("../icons/crane-thin.svg?v=00c880f1373e65ccea754e9aa1c38bd05a5bc1ae5a1e05c8c25cac0b1ad61bc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
