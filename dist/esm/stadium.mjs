export const name="stadium";
export const id="dl_76c44b16575f90279e4a";
export const url=new URL("../icons/stadium.svg?v=5732bd3ba4fdc011ce114af9633c883bad49297d7b799a1d26239b4103257ad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
