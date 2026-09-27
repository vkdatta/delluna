export const name="hand-waving-thin";
export const id="dl_06573ce3c084467385ad";
export const url=new URL("../icons/hand-waving-thin.svg?v=4c7add0b53384f44b622186b2893230eceb5b57790b2a958dc2dd19a7c56aca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
