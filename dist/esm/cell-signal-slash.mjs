export const name="cell-signal-slash";
export const id="dl_1f4e027a95d94f6781dc";
export const url=new URL("../icons/cell-signal-slash.svg?v=5f047c0b8b3d91d021468ce208a58ebcdd865ea19624a506a96eaf524235dd88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
