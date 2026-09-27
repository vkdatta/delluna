export const name="toggle-right-thin";
export const id="dl_b6f721fe8211a826e427";
export const url=new URL("../icons/toggle-right-thin.svg?v=e18ec8efac3fe5bf95ce4ea5ba5395ca5d096f4663b7b0d8ce0cda21b0d74d65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
