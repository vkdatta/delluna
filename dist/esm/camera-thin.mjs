export const name="camera-thin";
export const id="dl_27cc54686d0244498989";
export const url=new URL("../icons/camera-thin.svg?v=550218dc5b3c5a2b051979a416a45fd4f730aec0e2bba80612b3bb4394da82d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
