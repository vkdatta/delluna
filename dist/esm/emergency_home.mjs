export const name="emergency_home";
export const id="dl_27620c0a024271715373";
export const url=new URL("../icons/emergency_home.svg?v=a719408244b21a61db1ea0fa4e69a3ead1b30fffc8afd3bebca7b51d2566f3d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
