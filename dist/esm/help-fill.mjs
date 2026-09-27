export const name="help-fill";
export const id="dl_9a82c7cbf65e780dfc18";
export const url=new URL("../icons/help-fill.svg?v=93b745666cc16738193bdc674c063569e46b0627789a566b39f67dfcec1f41ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
