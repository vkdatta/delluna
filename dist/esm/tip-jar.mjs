export const name="tip-jar";
export const id="dl_c30da3a8658bc0bc9048";
export const url=new URL("../icons/tip-jar.svg?v=7bc29adabfcff7342fc4548f2a6abcbe019e43a27fc1857c0c32a2682910cab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
