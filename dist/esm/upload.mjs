export const name="upload";
export const id="dl_6698002408934c3eaa08";
export const url=new URL("../icons/upload.svg?v=21643633319e57beed9a219384c68e5735400b5cc86d56f250f8ad08f1ba43fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
