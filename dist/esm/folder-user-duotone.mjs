export const name="folder-user-duotone";
export const id="dl_7cf191ca167e445eafff";
export const url=new URL("../icons/folder-user-duotone.svg?v=d03860b40b58dd059d837bd540c38bc62dd6d2837e237881d1ab34b07ac940cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
