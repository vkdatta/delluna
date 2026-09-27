export const name="text-t-slash-thin";
export const id="dl_d9b69070eea28ecaaec6";
export const url=new URL("../icons/text-t-slash-thin.svg?v=d107998a61c50a88fb638351b518693bcfea30cbebe9fff62c81c067400af821",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
