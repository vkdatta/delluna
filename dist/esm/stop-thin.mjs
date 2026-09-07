export const name="stop-thin";
export const id="dl_c26a6f36f8634fa8b91f";
export const url=new URL("../icons/S/stop-thin.svg?v=e83bd211c68e284766f6f5d69cd023c711970cb797d0f19c9af0c672e15bfede",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
