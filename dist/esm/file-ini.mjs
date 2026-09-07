export const name="file-ini";
export const id="dl_9474ce6ec30b4b688e66";
export const url=new URL("../icons/file-ini.svg?v=3e3dcbcab111cd30bd9c5174c3ace8bc7aed1a665642bbfd7401110bd15e75f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
