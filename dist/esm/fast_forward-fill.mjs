export const name="fast_forward-fill";
export const id="dl_437193602c064307bbfe";
export const url=new URL("../icons/F/fast_forward-fill.svg?v=3c843174dfd37267ed5ee229577d7e8035d9808de6a98f8e3295e2b8b0af7a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
