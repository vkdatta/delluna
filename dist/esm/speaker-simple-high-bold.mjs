export const name="speaker-simple-high-bold";
export const id="dl_b3361ed074426c38de5f";
export const url=new URL("../icons/speaker-simple-high-bold.svg?v=41937a6457682931ba60874edcaae5821ae54c64e8167654982803f1edcbd8b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
