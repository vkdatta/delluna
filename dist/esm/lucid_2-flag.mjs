export const name="lucid_2-flag";
export const id="dl_57c1048d32a44e41932d";
export const url=new URL("../icons/lucid_2-flag.svg?v=0db2e3b2909e4b1c7c5b4cbac65b527474738578396879a996037ded605238c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
