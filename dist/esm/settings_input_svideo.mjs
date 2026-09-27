export const name="settings_input_svideo";
export const id="dl_bae42f044b701d4efb19";
export const url=new URL("../icons/settings_input_svideo.svg?v=d687a8e2b39ae9599a13ecae79d3a5f4ef58a07243d29ac0c5e4fad1c862b372",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
