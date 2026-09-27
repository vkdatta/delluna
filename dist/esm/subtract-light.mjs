export const name="subtract-light";
export const id="dl_a8a0a46b1431b8c24d67";
export const url=new URL("../icons/subtract-light.svg?v=aca23b41e87b666a7fd5a01b446e0ce81da1b2bf1b06b359267ac776d258f08f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
