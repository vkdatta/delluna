export const name="lucid_2-flag-off";
export const id="dl_d67304b8b2054e4fa944";
export const url=new URL("../icons/lucid_2-flag-off.svg?v=204be5fd0d485894b56c248165b43286c5b7fdebb37c3eb9ec011ca239f024c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
