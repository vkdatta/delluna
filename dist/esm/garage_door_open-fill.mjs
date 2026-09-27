export const name="garage_door_open-fill";
export const id="dl_6a4d9616545a27d5509e";
export const url=new URL("../icons/garage_door_open-fill.svg?v=bdd6c0e122ece1463b0d6cfe7fe5e9eac6e28c123c2438a1d3d2f71b5148bb4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
