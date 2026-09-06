export const name="envelope-duotone";
export const id="dl_46ed8b88afac4d0c9e2e";
export const url=new URL("../icons/envelope-duotone.svg?v=8ae92e57426296fbd6a103ae896fd0ebcefc1c79bb31ff871eb88ef1e0fad308",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
