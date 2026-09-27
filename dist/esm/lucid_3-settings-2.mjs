export const name="lucid_3-settings-2";
export const id="dl_261e8ca4d8694f8b9520";
export const url=new URL("../icons/lucid_3-settings-2.svg?v=c0c9a66f70ecd022d0192c7a5c0bc4c568b65537b1e0da9390d0bb81a94e11a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
