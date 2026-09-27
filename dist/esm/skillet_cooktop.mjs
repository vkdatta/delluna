export const name="skillet_cooktop";
export const id="dl_3949ad781875db5215b4";
export const url=new URL("../icons/skillet_cooktop.svg?v=d97425e22f8fdc1eec986c6e4b5b4aef694277abdfac1ee5b0faace8cca5a3ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
