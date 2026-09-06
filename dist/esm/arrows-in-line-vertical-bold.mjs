export const name="arrows-in-line-vertical-bold";
export const id="dl_2ad1e5ddc779472bb72a";
export const url=new URL("../icons/arrows-in-line-vertical-bold.svg?v=c74cad7ddbe1bec404ba943473de7eba280f5bf66e38db060728366875943332",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
