export const name="earthquake-fill";
export const id="dl_0abf5aef047f60374ad8";
export const url=new URL("../icons/earthquake-fill.svg?v=61339b8cf5ad0a7578ea32f5f6523c82f2fd1fa3952e26a97d9b4845c982270a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
