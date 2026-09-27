export const name="dice-two-thin";
export const id="dl_a95a74412d1b46af8934";
export const url=new URL("../icons/dice-two-thin.svg?v=67a6eaac2f1478b856910bf80711d01054d66c6d7f6dea48dc21fab09c35b611",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
