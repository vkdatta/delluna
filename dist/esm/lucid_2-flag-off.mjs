export const name="lucid_2-flag-off";
export const id="dl_d67304b8b2054e4fa944";
export const url=new URL("../icons/lucid_2-flag-off.svg?v=019b5c7058b08d2b59328df8c80af5f7a3662140b0611080c82b39b8afb549b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
