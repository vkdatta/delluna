export const name="microwave-fill";
export const id="dl_e68a9d976036a40801db";
export const url=new URL("../icons/microwave-fill.svg?v=5e10c39986eff6e8da29ac7c7e5015b164ab612271d32a21caffad9825ab7164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
