export const name="skip-forward-circle-light";
export const id="dl_f8c28d0345fde6c90744";
export const url=new URL("../icons/skip-forward-circle-light.svg?v=690bed0c25dac62bdac26d56706ddbad5a1d656d46e576374bbb3bec8f4c13d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
