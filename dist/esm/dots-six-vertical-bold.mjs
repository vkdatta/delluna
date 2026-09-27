export const name="dots-six-vertical-bold";
export const id="dl_4de3ec8559fd4215a23e";
export const url=new URL("../icons/dots-six-vertical-bold.svg?v=845acb96f4a3b830121615ebc63c6b012ad0870cb0e0cd21489cfddf01649bf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
