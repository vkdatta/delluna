export const name="arrows-out-line-horizontal-light";
export const id="dl_d5a099a0580e42ec8134";
export const url=new URL("../icons/arrows-out-line-horizontal-light.svg?v=f34cdad5fefbc680a666f15b272d484014b2e5841bf87513456647922ee9c4f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
