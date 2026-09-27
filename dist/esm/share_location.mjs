export const name="share_location";
export const id="dl_3dbe96c758e5c0a6f82a";
export const url=new URL("../icons/share_location.svg?v=d47895e3c0597e88a544b83fd5efa8c633a8587aff8e92b43a5e50be4b42dd24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
