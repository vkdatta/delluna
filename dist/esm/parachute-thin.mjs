export const name="parachute-thin";
export const id="dl_ffd7047a50724d3995be";
export const url=new URL("../icons/parachute-thin.svg?v=5cb00be3152a04ef89a1da6bd4636256c15ad26af298038455436ab86491691c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
