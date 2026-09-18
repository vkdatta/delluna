export const name="mobile_check-fill";
export const id="dl_96ab57e55e9444a2954d";
export const url=new URL("../icons/M/mobile_check-fill.svg?v=bbb10f972501bb62dd4e869e9d36444846b625dda2243435d9c096d5e45f5854",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
