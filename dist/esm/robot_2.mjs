export const name="robot_2";
export const id="dl_12f6261829df48d0854d";
export const url=new URL("../icons/robot_2.svg?v=96b344690de692ca072ef987d1129c47bab1280859e7098efd5521b76d092929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
