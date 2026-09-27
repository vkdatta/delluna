export const name="arrow-elbow-up-left-fill";
export const id="dl_2b3fdbad991a4fa185f0";
export const url=new URL("../icons/arrow-elbow-up-left-fill.svg?v=6747dca35fd479b7c49e4dae052bb03eee1e0584915a9d18b614171998f77162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
