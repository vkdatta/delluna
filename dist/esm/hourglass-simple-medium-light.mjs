export const name="hourglass-simple-medium-light";
export const id="dl_eba41fb8108f40229692";
export const url=new URL("../icons/hourglass-simple-medium-light.svg?v=91d586f7bf941fc7106433e96ce258479b3d244a9ceab4ed5e827960543bebf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
