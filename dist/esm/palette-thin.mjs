export const name="palette-thin";
export const id="dl_b752d1c8c0fb4f59b47d";
export const url=new URL("../icons/palette-thin.svg?v=9fe2eda295517c0e160c349e1282714ab1f897096475a9ac0408bd8e12c27e43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
