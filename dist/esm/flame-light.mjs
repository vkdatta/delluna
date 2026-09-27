export const name="flame-light";
export const id="dl_526bd1d000174b86810c";
export const url=new URL("../icons/flame-light.svg?v=f1b18e96d2d85d8a7fe8d00414b036100c5998bafd085af4343f5679af6f62a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
