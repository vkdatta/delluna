export const name="sports_motorsports-fill";
export const id="dl_bb63a269f5692c99b6e7";
export const url=new URL("../icons/sports_motorsports-fill.svg?v=1990259c37a9609ff4297d4c26579625c0fe3666c9583b33082bb387f4dede75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
