export const name="electric_scooter-fill";
export const id="dl_a82825be0faa5fb1a4a6";
export const url=new URL("../icons/electric_scooter-fill.svg?v=c0785388408ded3b4d192e34f1968966aed2d4da3cbd5e1fe574cccf654dcb13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
