export const name="bottom_panel_open-fill";
export const id="dl_18188259c782f6c21d5b";
export const url=new URL("../icons/bottom_panel_open-fill.svg?v=9d15727180707a1ab430a253272ed932bde4ccd1a43e89b9166a84a2cd2e4343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
