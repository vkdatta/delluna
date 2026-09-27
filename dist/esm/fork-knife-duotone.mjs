export const name="fork-knife-duotone";
export const id="dl_054cc47c8a25439395df";
export const url=new URL("../icons/fork-knife-duotone.svg?v=2d6575e4b4cd34aa3bc250a70649e4b1d1f18942d5a89aea00c6a92c80f33d5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
