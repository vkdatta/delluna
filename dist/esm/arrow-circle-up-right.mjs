export const name="arrow-circle-up-right";
export const id="dl_07d5efadfb95480887c4";
export const url=new URL("../icons/arrow-circle-up-right.svg?v=609c22d1ebb5b8df08c668e4c705fb14698b75c4aae3583d30f9b87ffeb291bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
