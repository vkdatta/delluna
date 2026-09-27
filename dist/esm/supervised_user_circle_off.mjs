export const name="supervised_user_circle_off";
export const id="dl_934f23eff7a36847f4bf";
export const url=new URL("../icons/supervised_user_circle_off.svg?v=51bdaf0e9e736d7fbe26faabe918ef490d84a5d42b887005a4f912efae6eb6f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
