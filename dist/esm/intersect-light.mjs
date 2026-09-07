export const name="intersect-light";
export const id="dl_ce4c6623c1994684b82e";
export const url=new URL("../icons/intersect-light.svg?v=3065dcf9bca59c9f4224c4c2fc326b253f6740081dfd315c957c7e91683e2be7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
