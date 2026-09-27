export const name="caret-double-left-fill";
export const id="dl_9ee18b61c9924c089d52";
export const url=new URL("../icons/caret-double-left-fill.svg?v=76dd99324038f316fa2350e8d44e08088466d48f459b54ce94985d570fa059ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
