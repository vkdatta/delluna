export const name="align-top-duotone";
export const id="dl_beff6c4e3f7446c5a1a2";
export const url=new URL("../icons/align-top-duotone.svg?v=df8065d0e5028783561c907676706566f98cf8da978232415fe2d093a307f35e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
