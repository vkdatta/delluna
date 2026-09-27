export const name="sliders";
export const id="dl_8c4c12bd4dcfab62510f";
export const url=new URL("../icons/sliders.svg?v=b8a605cf4794c23b8345e082a48abc0394a056a94b29a8dda9951973a9bfa461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
