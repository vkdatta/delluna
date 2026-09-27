export const name="stairs-bold";
export const id="dl_983898bd84148228d292";
export const url=new URL("../icons/stairs-bold.svg?v=ed2e5aa83358a175c9d1ef5f32b7460d52fc81924fb64bb53e692180fd7df187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
