export const name="undereye-fill";
export const id="dl_d0c3285f875949dd98fd";
export const url=new URL("../icons/undereye-fill.svg?v=df1b72becfc9911d6950fbf063e01263c03c6c0569f4cbc54b30bde7952b0f44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
