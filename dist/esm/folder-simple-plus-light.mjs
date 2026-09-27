export const name="folder-simple-plus-light";
export const id="dl_2df631921af7470f9356";
export const url=new URL("../icons/folder-simple-plus-light.svg?v=cefc7ac937a2427286bd4274184e64ac2e43b603d796b0d28de573fbc2d27ebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
