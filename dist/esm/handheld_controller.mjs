export const name="handheld_controller";
export const id="dl_45b2ca7ac0c85861d898";
export const url=new URL("../icons/handheld_controller.svg?v=00860ecf640c96d64202cd1f284d970e8d296651e69c3ae3492e78f0618b4ea5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
