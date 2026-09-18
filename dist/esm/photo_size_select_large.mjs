export const name="photo_size_select_large";
export const id="dl_352835d12b73444cae09";
export const url=new URL("../icons/photo_size_select_large.svg?v=faf8335adae83a9d2d99c97e646f7360ec1f44d3cde2b6d35a666a32fceaa7ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
