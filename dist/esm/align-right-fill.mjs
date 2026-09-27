export const name="align-right-fill";
export const id="dl_6f580abd1050446d84ff";
export const url=new URL("../icons/align-right-fill.svg?v=e4fd7b1ab0260d873b5bcc77fd463ced482787067ba4942d2d3525713bbf6430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
