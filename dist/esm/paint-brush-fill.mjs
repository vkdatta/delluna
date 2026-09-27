export const name="paint-brush-fill";
export const id="dl_dc54c7b01c0f4d55b2ff";
export const url=new URL("../icons/paint-brush-fill.svg?v=3c4f553de4bfccca81869d6770456fd241d46f48f9fd7c3988b38b756ab60d93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
