export const name="desktop-tower-light";
export const id="dl_7fcd89e826134a04976a";
export const url=new URL("../icons/desktop-tower-light.svg?v=e793d0c2e546bf2034b7b163401cd191efdb4fdd9268383e5c85198b72776f75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
