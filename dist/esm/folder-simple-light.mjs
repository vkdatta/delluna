export const name="folder-simple-light";
export const id="dl_4cef02cea99749139d8d";
export const url=new URL("../icons/folder-simple-light.svg?v=94a31a36d39c5fda00738a36bd1a586022f931191e7655b8295b14ed74a4859b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
