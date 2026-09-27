export const name="lucid_3-palette";
export const id="dl_a482b06081964538af4d";
export const url=new URL("../icons/lucid_3-palette.svg?v=760c149792ccb862a15339038e61be69a336c52781abef49738d1de00cb6890a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
