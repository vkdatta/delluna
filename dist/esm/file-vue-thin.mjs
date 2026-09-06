export const name="file-vue-thin";
export const id="dl_313d2d20414d4d49b59b";
export const url=new URL("../icons/file-vue-thin.svg?v=bdd8d5a4b56f5ba8c001286ab5ef9988d1beefb26f63df361d552f847a7ee517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
