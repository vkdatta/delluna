export const name="local_library";
export const id="dl_49e58791950088b5efd6";
export const url=new URL("../icons/local_library.svg?v=a7c1bf904115bbae9689c22328d3e450f806c5fcbec28b13b642e334691bc943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
