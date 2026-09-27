export const name="stamp";
export const id="dl_0ccdf4ce1208473a90b4";
export const url=new URL("../icons/stamp.svg?v=76310b75329cbd058249be328b300c260063588f88968b67a47de387564d9a05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
