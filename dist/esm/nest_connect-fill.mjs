export const name="nest_connect-fill";
export const id="dl_e5b289d4442e492d2622";
export const url=new URL("../icons/nest_connect-fill.svg?v=ad2795ab3412ea63739abbd267be74c4422cb4a6eb782c46da29283a63a6e4e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
