export const name="lucid_2-earth";
export const id="dl_248341fc7dc640438aa4";
export const url=new URL("../icons/lucid_2-earth.svg?v=0d9d73e1bd6b8d3592ddac73b00fde453eeb6a815537f735f6065e3193bc925e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
