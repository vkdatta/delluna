export const name="film-reel-thin";
export const id="dl_bc4a6e8141794aec8a5d";
export const url=new URL("../icons/film-reel-thin.svg?v=c81cd5c508dff2e1b87847c1de35271de9a33509fc46e3081927446c8bc9325e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
