export const name="folder-simple-minus";
export const id="dl_cea81c08e3a948289a0f";
export const url=new URL("../icons/folder-simple-minus.svg?v=72a3b65aa7331a4ca6c5ea0a08032be36b19d29a7e90d582ff089d941d04dcb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
