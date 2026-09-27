export const name="star-of-david";
export const id="dl_d631f51a6ba3f23cca1b";
export const url=new URL("../icons/star-of-david.svg?v=ce675aa12ae5f2ff6f5b9885dc692b768339e4c523d465c3a9a9a99a28c43cb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
