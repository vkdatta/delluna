export const name="user-thin";
export const id="dl_92d7f1e1551d440e820d";
export const url=new URL("../icons/U/user-thin.svg?v=c5e2fe7354ccc9cbecf5f9218ea981d0e6575166630146b930b2723c20571393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
