export const name="lucid_2-file-up";
export const id="dl_61838c4325054e4a88bc";
export const url=new URL("../icons/lucid_2-file-up.svg?v=b55b7a90212efe74af71af80e3f9c4f2b9a3120c969af6065d146bbf9c058042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
