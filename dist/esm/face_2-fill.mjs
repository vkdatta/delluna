export const name="face_2-fill";
export const id="dl_c138e659ea5fce2f8979";
export const url=new URL("../icons/face_2-fill.svg?v=0e5b10ea2c6d3bde8884b2ff84b6aff076d42d9bc6ecbce312d78a7021ed032a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
