export const name="arrow-u-up-right-light";
export const id="dl_bca35b4a1dba47888b53";
export const url=new URL("../icons/arrow-u-up-right-light.svg?v=5250b84a09f6ea7ec789cd03922f30a5fc42efc1b110cbf9b1fb53ab49f7d08b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
