export const name="timer-bold";
export const id="dl_b3cbb9a76fef4985ac4d";
export const url=new URL("../icons/T/timer-bold.svg?v=7d7115b542a6be73928efe9f8b022cf93d6321aeb142c81c87db67dff2504ad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
