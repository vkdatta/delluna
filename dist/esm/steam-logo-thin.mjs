export const name="steam-logo-thin";
export const id="dl_68819e03c71949e60a18";
export const url=new URL("../icons/steam-logo-thin.svg?v=127f43ec47e57b4bdcf013b518ce3613f341921fa904878637885a7ce4e61574",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
