export const name="cell-signal-slash";
export const id="dl_1f4e027a95d94f6781dc";
export const url=new URL("../icons/cell-signal-slash.svg?v=c84d0b70910a4a0fafa5175d1c4299e8234cc78d6e22dc8c6959d32b028e249a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
