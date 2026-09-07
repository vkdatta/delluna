export const name="webhooks-logo-thin";
export const id="dl_684ee9a0f08247a0a178";
export const url=new URL("../icons/W/webhooks-logo-thin.svg?v=2173faa22de5d20e20d98393d21039257c2c785cae27e27dc16ba449af75032e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
