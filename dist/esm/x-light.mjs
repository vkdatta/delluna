export const name="x-light";
export const id="dl_dd0c3f7c68db5294ffa9";
export const url=new URL("../icons/x-light.svg?v=7f3f44f5e9fdc40d7d8ecaf49c9b2cca95a6f7b944f81f7ae5d8d8bb674d8d91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
