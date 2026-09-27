export const name="sports_martial_arts-fill";
export const id="dl_36387e4cb8e892ae2efd";
export const url=new URL("../icons/sports_martial_arts-fill.svg?v=a35a6013e272e791d13a561fdea53735a8a7ffbca610a894bc965e3505c47ea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
