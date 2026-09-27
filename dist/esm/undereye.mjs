export const name="undereye";
export const id="dl_ff88c116e1136a69773d";
export const url=new URL("../icons/undereye.svg?v=3cdcd5a30df6d840fff8c867a1d86a87affd145af1b0ac8a84e2ca0c419e8c93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
