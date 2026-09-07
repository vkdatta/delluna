export const name="arrow-line-left-thin";
export const id="dl_f5a129accba243c69bfe";
export const url=new URL("../icons/arrow-line-left-thin.svg?v=212327a324edc43411d44a4a0472d7844f0159f9b1b405aeb668da1fd25524e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
