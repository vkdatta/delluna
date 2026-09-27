export const name="keyboard_arrow_right-fill";
export const id="dl_da070c8b1018fd9a4f68";
export const url=new URL("../icons/keyboard_arrow_right-fill.svg?v=583cf7efe6780904bb5c966eddad0fd64bebc5887cdc2107897b8ccd139e9167",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
