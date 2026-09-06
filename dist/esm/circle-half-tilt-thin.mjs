export const name="circle-half-tilt-thin";
export const id="dl_241f7d4a405d47a4b5ee";
export const url=new URL("../icons/circle-half-tilt-thin.svg?v=2a5f35b336f8e42e3885f2a59673a1622913959312665e6a02bcda6e07c3fd0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
