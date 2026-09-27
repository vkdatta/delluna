export const name="exclude-thin";
export const id="dl_31ab8180f4134b838773";
export const url=new URL("../icons/exclude-thin.svg?v=b110727b37a36bd305fd52f093f844b6c9b04d1f904f993b221544dfc9773708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
