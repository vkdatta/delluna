export const name="lyrics-fill";
export const id="dl_7fb74d269f34eb7bfc94";
export const url=new URL("../icons/lyrics-fill.svg?v=a41eac8d156552083e3022a8846ab2ff46fcf4845b0a65f1ae61928ab928c982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
