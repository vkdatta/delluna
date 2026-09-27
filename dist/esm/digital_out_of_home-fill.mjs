export const name="digital_out_of_home-fill";
export const id="dl_45fd42841ef430f3ae10";
export const url=new URL("../icons/digital_out_of_home-fill.svg?v=8679a994d45f8a55aa8b33b398a364458e52fbddcb9ed3bf26c34630b56cf3b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
