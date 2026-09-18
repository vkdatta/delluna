export const name="audio_description-fill";
export const id="dl_ae528709c2d848e79d4d";
export const url=new URL("../icons/audio_description-fill.svg?v=e63c0872fe98a9e39d656b2d5c291fcda8c9457e80cce3b8f3c0ae60ef580fb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
