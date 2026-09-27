export const name="lucid_1-between-horizontal-end";
export const id="dl_4fce8e308bd74dffb536";
export const url=new URL("../icons/lucid_1-between-horizontal-end.svg?v=16eb8b1c3c261d94315c08223b8a0cd4a80fc34111433f2700f61effb8b42f00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
