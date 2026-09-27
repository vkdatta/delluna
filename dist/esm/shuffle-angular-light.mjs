export const name="shuffle-angular-light";
export const id="dl_adf24e0c0f394df9d058";
export const url=new URL("../icons/shuffle-angular-light.svg?v=3d679af5e43692d231145ec50fbc9da0a09c44db4d8d2a2cb64fc7339b175d30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
