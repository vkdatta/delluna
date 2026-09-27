export const name="file-rs-fill";
export const id="dl_c44c69ad1af84af4ace6";
export const url=new URL("../icons/file-rs-fill.svg?v=bc84e4b696a8bb4906dae35cead7810d7c61e7d9da868ff94cbba17e924c190f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
