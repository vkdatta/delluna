export const name="arrow-line-down";
export const id="dl_d0cc6277107f4ae3bfba";
export const url=new URL("../icons/arrow-line-down.svg?v=fbf0ae026f34d541f48d457b34a08eab3da18739643886da298a034313ba1fb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
