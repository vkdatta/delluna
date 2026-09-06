export const name="rows-plus-bottom-bold";
export const id="dl_afd3490119244fce8f7b";
export const url=new URL("../icons/rows-plus-bottom-bold.svg?v=e1133d2c90ab09929d8cfe463c75c7ce7c940fb3937a79bf6b6ecdf78a5cd708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
