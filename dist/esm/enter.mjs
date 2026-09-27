export const name="enter";
export const id="dl_3105691065ff9395cab3";
export const url=new URL("../icons/enter.svg?v=d57f46d53a1a0b17c1936fdfecf37deeee7c6279a8e9ab099ac77cb7e2b046bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
