export const name="baby-carriage-light";
export const id="dl_28790674bfd54b59b499";
export const url=new URL("../icons/baby-carriage-light.svg?v=1d343a41fde0d0a33727704eb2a5bbb86fda9af97c731637c360db02d7110a90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
