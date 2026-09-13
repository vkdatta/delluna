export const name="12mp";
export const id="dl_59586fdbfb624a2db199";
export const url=new URL("../icons/1/12mp.svg?v=ca298149d16face5b3792beeb6de0a87789b598b60fcf27dca06225f41cbaa40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
