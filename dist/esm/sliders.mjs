export const name="sliders";
export const id="dl_0dab62e5e3c34165b2fb";
export const url=new URL("../icons/S/sliders.svg?v=b8a605cf4794c23b8345e082a48abc0394a056a94b29a8dda9951973a9bfa461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
