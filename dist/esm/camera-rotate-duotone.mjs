export const name="camera-rotate-duotone";
export const id="dl_e5c2349a729144cf8ec1";
export const url=new URL("../icons/camera-rotate-duotone.svg?v=00a393c9766ed671dc5dfd7641892f25ea4cfcc2bbfa0022fd709e2a8046b2f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
