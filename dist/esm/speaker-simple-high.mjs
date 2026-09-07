export const name="speaker-simple-high";
export const id="dl_79af6eef8a7e454ababc";
export const url=new URL("../icons/S/speaker-simple-high.svg?v=844e1186330da432675306cbf98098bbf066b6adb0cb6294677e6437b5b0fccb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
