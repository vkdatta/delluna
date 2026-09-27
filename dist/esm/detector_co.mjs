export const name="detector_co";
export const id="dl_89298f34b856818d0d75";
export const url=new URL("../icons/detector_co.svg?v=04f2ace6221f170534862c373ce31e46a6e26e8e3ed67396389d8354980c652e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
