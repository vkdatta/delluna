export const name="imagesmode-fill";
export const id="dl_69d5e71b936e48f79583";
export const url=new URL("../icons/imagesmode-fill.svg?v=696e6eb07564ea849ef34d9632efe73496d54f13980e9062903127cd9824f778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
