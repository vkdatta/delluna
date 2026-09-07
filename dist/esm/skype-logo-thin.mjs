export const name="skype-logo-thin";
export const id="dl_6995fdeb5251489ba142";
export const url=new URL("../icons/S/skype-logo-thin.svg?v=14b8310d3a2928db03fb138457771f4c3f944ac00b0087f818bc4de21472e5b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
