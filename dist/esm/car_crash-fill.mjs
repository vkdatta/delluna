export const name="car_crash-fill";
export const id="dl_9e7bdcb0e5aeb3be84b9";
export const url=new URL("../icons/car_crash-fill.svg?v=02d14f5619ea483996b3141b05c9f5317f446b338b8ee3617be6dc063e061567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
