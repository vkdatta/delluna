export const name="battery-vertical-full-duotone";
export const id="dl_0f9ce76c4c244065a082";
export const url=new URL("../icons/battery-vertical-full-duotone.svg?v=8e87f336a1915a01b89e28874063130005aafc068639e0b4461f3752a46d38e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
