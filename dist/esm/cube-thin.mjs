export const name="cube-thin";
export const id="dl_467b2a1188004d909922";
export const url=new URL("../icons/cube-thin.svg?v=dc47290ef3e9306c796bbf90303b3350d444ce54bf0fc1420a61b50351489c9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
