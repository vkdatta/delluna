export const name="brackets-round";
export const id="dl_2c2e2dd0698f4be6b9f4";
export const url=new URL("../icons/brackets-round.svg?v=4062c75fd30ea6511e56f5ef843119a0148ca5b04470844183ad5ae8581d16f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
