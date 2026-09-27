export const name="swipe_down_alt-fill";
export const id="dl_ab9d47eb60eb8703f150";
export const url=new URL("../icons/swipe_down_alt-fill.svg?v=180cab90b0489950ce3d0083e744e82da880e059908a18d083bf7b1db8c0b2e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
