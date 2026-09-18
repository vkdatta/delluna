export const name="pallet-fill";
export const id="dl_0f388389ca2e4ffebea8";
export const url=new URL("../icons/P/pallet-fill.svg?v=07b4b622abe8e0ce65963972ba08d5731228946dbfaf49e3210fd6520cf1cb56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
