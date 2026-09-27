export const name="table_eye-fill";
export const id="dl_5f27a8ed02d5a387e9b4";
export const url=new URL("../icons/table_eye-fill.svg?v=920a2496cc9bde7380535132b4c98596d00d1a955d53a7b3f83405e0dbdc4f88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
