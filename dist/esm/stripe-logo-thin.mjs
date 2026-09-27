export const name="stripe-logo-thin";
export const id="dl_35f883bbb958636a8e9a";
export const url=new URL("../icons/stripe-logo-thin.svg?v=8f2c14dd570b78609d46ed88afd8046fb2556de351013192164200f28ee2a2b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
