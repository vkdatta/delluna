export const name="stool-thin";
export const id="dl_bf21a3b9adec1ff68253";
export const url=new URL("../icons/stool-thin.svg?v=92463b1926713ce1d3b8eeb84611cf189442be5754ec264f9857c30d89240174",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
