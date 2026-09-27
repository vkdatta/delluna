export const name="lucid_3-pen-tool";
export const id="dl_4dbbb0fc445342088016";
export const url=new URL("../icons/lucid_3-pen-tool.svg?v=190501f3f77e2e9e03b5e207cc3c3b1eb660a00421ccd1867cc5ba84246a122a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
