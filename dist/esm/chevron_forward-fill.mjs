export const name="chevron_forward-fill";
export const id="dl_e397ba711ce96ac4c673";
export const url=new URL("../icons/chevron_forward-fill.svg?v=583cf7efe6780904bb5c966eddad0fd64bebc5887cdc2107897b8ccd139e9167",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
