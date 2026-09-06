export const name="hourglass-simple-low-thin";
export const id="dl_fe2dd3278c02464bbca3";
export const url=new URL("../icons/hourglass-simple-low-thin.svg?v=c79077b7459da82b9f6b55d44ec9d479d5a14689ad2558c25d4972314b3cd60e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
