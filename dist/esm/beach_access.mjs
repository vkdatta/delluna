export const name="beach_access";
export const id="dl_a89c78beaaa8832dff83";
export const url=new URL("../icons/beach_access.svg?v=f4f93e59d3392c77c1105b3e2f98905b5dca66f78b53a8712d0376869545235e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
