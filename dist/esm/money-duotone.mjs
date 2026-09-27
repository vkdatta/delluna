export const name="money-duotone";
export const id="dl_8502c2a9c9834286a720";
export const url=new URL("../icons/money-duotone.svg?v=c131ece23c2220bb09451f6a816d632ff36a4fc6af19aa5c86e3f1663c85d0d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
