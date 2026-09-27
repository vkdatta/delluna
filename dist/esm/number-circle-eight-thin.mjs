export const name="number-circle-eight-thin";
export const id="dl_8eda5b9713de4bc8a782";
export const url=new URL("../icons/number-circle-eight-thin.svg?v=0cc6a709363ba1fc13367f990e92a0bc704129291ae3b886e740e48916c6c6a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
