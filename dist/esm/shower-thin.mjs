export const name="shower-thin";
export const id="dl_78d6c8fa280a7fd1b7cd";
export const url=new URL("../icons/shower-thin.svg?v=06a3550cf09a20ff67ee6b3d91d25c0d883196d0e7e83b9e190e3ed6ffe191bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
