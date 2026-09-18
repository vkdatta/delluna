export const name="allergy-fill";
export const id="dl_95777e7ab81a467dbc25";
export const url=new URL("../icons/allergy-fill.svg?v=42d12a34b0438ab6eb10f2cdc0c71b3b37bac40324ff763dec2cd4e61b0576fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
