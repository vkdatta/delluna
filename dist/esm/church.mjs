export const name="church";
export const id="dl_beaf67efada4de3ba7b6";
export const url=new URL("../icons/church.svg?v=80b025702084f348d344b4d758d0af7c71c784588b201daa5fb91f57fd47b179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
