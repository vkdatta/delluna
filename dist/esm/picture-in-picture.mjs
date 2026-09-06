export const name="picture-in-picture";
export const id="dl_be391b78ef4c4a2ba0d3";
export const url=new URL("../icons/picture-in-picture.svg?v=1aff42c9099aca255dd052d661c4bc3aa66ffe176679a096ef92776e82b89396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
