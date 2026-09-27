export const name="file-ts";
export const id="dl_7831bfae50d4402fb9a9";
export const url=new URL("../icons/file-ts.svg?v=420f418dd780165c9c59ccc7e02e610984ad88e235907295baeac6ad87f4ac0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
