export const name="settings_input_antenna-fill";
export const id="dl_db8f932cc8e0a2e855fe";
export const url=new URL("../icons/settings_input_antenna-fill.svg?v=d44c1585c2c2a796d899cd51a19693100dacb4ff139216ad86ebf4e14372f51c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
