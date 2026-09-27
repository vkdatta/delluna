export const name="spade-duotone";
export const id="dl_fdf97b15ccc7aaddfbfd";
export const url=new URL("../icons/spade-duotone.svg?v=1aa535772d58e4fffa8d1bbc78ffeb20d24d8864f864e8b8faa33e1179f2c5b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
