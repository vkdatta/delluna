export const name="lucid_1-cloud-sun-rain";
export const id="dl_a694de2178bd4fc6a495";
export const url=new URL("../icons/lucid_1-cloud-sun-rain.svg?v=851e92947aacebbd45fc45e210a679a8697f9d14b4ef53f3f420699291d7b4d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
