export const name="screen_record-fill";
export const id="dl_6747d5123bf63cfc89c7";
export const url=new URL("../icons/screen_record-fill.svg?v=ca7e98bf3855389a7f1d2f40ea57143c5d337dbdd59fd677ef5125a874e0ac27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
