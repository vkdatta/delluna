export const name="scooter-fill";
export const id="dl_a8ead5750dfb269cc4db";
export const url=new URL("../icons/scooter-fill.svg?v=801492d5fab3095c1b6bba2ec66ce71bbe9fc0cd38efb48f7a26ba6cba049fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
