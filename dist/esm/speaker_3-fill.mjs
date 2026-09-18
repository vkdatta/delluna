export const name="speaker_3-fill";
export const id="dl_dc7038969f88444cbc78";
export const url=new URL("../icons/S/speaker_3-fill.svg?v=6a8a33ea152a83cba9aebdaeb01d0fa820167fb22fee29a413ad6d5571f06757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
