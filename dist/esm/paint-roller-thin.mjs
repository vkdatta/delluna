export const name="paint-roller-thin";
export const id="dl_9a396e4fbd914947ab1a";
export const url=new URL("../icons/paint-roller-thin.svg?v=d36f9b6e3dd40bde17dc2e3e61a90926c40f864d298c91d7bb53a2109d790e05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
