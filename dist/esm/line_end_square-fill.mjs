export const name="line_end_square-fill";
export const id="dl_a438a57ad6defec5c9e0";
export const url=new URL("../icons/line_end_square-fill.svg?v=825d932bc28c934dfa4b4fc2a790be6730c899201288ceb5ba7f642e5035d810",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
