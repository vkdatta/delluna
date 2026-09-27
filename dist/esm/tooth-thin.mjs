export const name="tooth-thin";
export const id="dl_540708a9d5639fcede15";
export const url=new URL("../icons/tooth-thin.svg?v=3793ee67b3974c028b0dc68b386c9cef99c270c48b3e13511c12d7e550b77c6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
