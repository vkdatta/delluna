export const name="lucid_2-keyboard-music";
export const id="dl_57fb3a0831e942d8ac9f";
export const url=new URL("../icons/lucid_2-keyboard-music.svg?v=ba75da11e262bb2bef6f505fced6a6a1c2c63b3a1d9c874efd950e1bfccff9a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
