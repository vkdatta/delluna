export const name="share";
export const id="dl_a0e9a9d571bc4aaeb2ed";
export const url=new URL("../icons/share.svg?v=67744f00a4c2a78e57a8a165a8b6d31659a1d924d4369f926ecf653b0008dceb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
