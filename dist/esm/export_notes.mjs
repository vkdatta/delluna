export const name="export_notes";
export const id="dl_8dbf2f7088a2437287ac";
export const url=new URL("../icons/export_notes.svg?v=80eb6423227b44a2c61aad8dd0173065cc7ae912a4ad2918ad744e00cbd04fc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
