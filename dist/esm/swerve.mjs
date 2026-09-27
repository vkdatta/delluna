export const name="swerve";
export const id="dl_609927229d55448ea6ab";
export const url=new URL("../icons/swerve.svg?v=7bd8fd5472213c9f2fe8f97475e8ff99dc550fdc5c711324744d144a5da92f82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
