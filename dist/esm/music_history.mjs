export const name="music_history";
export const id="dl_442c27d734468dcecf20";
export const url=new URL("../icons/music_history.svg?v=41aab7eab838b0e7b833dac2efdad80929b8d1da1f4760b9d83adf5282803baf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
