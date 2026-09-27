export const name="confetti-fill";
export const id="dl_8c44a57cd205460ba61b";
export const url=new URL("../icons/confetti-fill.svg?v=567e2706797891f136d1905ad7a7ddf1656730acd89a27c481fbab6a47b2bdb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
