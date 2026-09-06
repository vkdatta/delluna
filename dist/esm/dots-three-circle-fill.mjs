export const name="dots-three-circle-fill";
export const id="dl_5246f457c6a845ab94c9";
export const url=new URL("../icons/dots-three-circle-fill.svg?v=5d1b56ef65c060f0f56eae2ccdd9dc716cd24f7d691e03fc03cde81f0a3ed16e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
