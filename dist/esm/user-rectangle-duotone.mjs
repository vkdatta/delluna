export const name="user-rectangle-duotone";
export const id="dl_75780748d6dfca5da117";
export const url=new URL("../icons/user-rectangle-duotone.svg?v=213a78a94d699491641da0cac5df5877465218312b3a8b6339efcfd33ef87d4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
