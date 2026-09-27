export const name="lectern-bold";
export const id="dl_ed07a97a83324b72b258";
export const url=new URL("../icons/lectern-bold.svg?v=78b1d55811d4eb945a6e8c10296b9b321be61a60ad17000cb5571a00f53aa72b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
