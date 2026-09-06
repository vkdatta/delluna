export const name="folder-simple-duotone";
export const id="dl_e7319654ca944f638b8e";
export const url=new URL("../icons/folder-simple-duotone.svg?v=66ae9431d42c48e2d2d98de837174e96ca48e65417e4b54ec062f6bbe9706ad5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
