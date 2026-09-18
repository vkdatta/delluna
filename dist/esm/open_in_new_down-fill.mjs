export const name="open_in_new_down-fill";
export const id="dl_b5d875b0ed724f8f9b6a";
export const url=new URL("../icons/open_in_new_down-fill.svg?v=4fb57b30161342e931d429b55c6e92c85cdba5c8ba1863e3eab43adfea6b06c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
