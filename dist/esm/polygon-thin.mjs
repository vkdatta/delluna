export const name="polygon-thin";
export const id="dl_ba06ee06efc247cf9a80";
export const url=new URL("../icons/polygon-thin.svg?v=2f70f59de3128d76d3d79c98ac1010f90bcfb4b3e46e3f578c0537f6a4e7c9b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
