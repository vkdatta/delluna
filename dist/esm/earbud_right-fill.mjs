export const name="earbud_right-fill";
export const id="dl_4a6f3fd374abaf719212";
export const url=new URL("../icons/earbud_right-fill.svg?v=04ad1c614350ea3c4884e094691d2595054a665c09daf1464b1e1c5eed559a45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
