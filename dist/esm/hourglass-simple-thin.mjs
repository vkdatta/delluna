export const name="hourglass-simple-thin";
export const id="dl_4bc2ebdd14fe498dbd9f";
export const url=new URL("../icons/hourglass-simple-thin.svg?v=cd99016aa99f35402dd37708ea47c1d751325d1fdf6a2bf32d59fbf2ed6492a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
