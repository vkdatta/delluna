export const name="location_away-fill";
export const id="dl_55796fdd3134725b49e9";
export const url=new URL("../icons/location_away-fill.svg?v=fc254ba419f03e2b00659a0477c883d455daf04caaeeaeb4d66640f39b2eb4c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
