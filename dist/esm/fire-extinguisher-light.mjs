export const name="fire-extinguisher-light";
export const id="dl_14c6af4fb71d4398b7a8";
export const url=new URL("../icons/fire-extinguisher-light.svg?v=d7a1d59360806387c3be6dab15d9296cd13f3d6c4dc4aa315120abc33ea83cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
