export const name="cancel";
export const id="dl_ade829fcfe4293c2787f";
export const url=new URL("../icons/cancel.svg?v=ef1a9300fdc245653c62edaf5faae9d1520fa351f4528c9659127aa7956c7a81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
