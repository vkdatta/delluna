export const name="beach-ball-thin";
export const id="dl_e475d3a7f0f34cf2873d";
export const url=new URL("../icons/beach-ball-thin.svg?v=ba81e0c4b593966ebe824112d00d4cb59757f35a492897cfe63668c97e63d98d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
