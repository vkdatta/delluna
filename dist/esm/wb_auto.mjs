export const name="wb_auto";
export const id="dl_a47c22375c567f9d8604";
export const url=new URL("../icons/wb_auto.svg?v=b933cd1f855be3977be685501243e3b22df8a92892f152268e5164ab525d4f52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
