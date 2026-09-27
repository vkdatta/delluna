export const name="stripe-logo-thin";
export const id="dl_51f042031c88f06160e3";
export const url=new URL("../icons/stripe-logo-thin.svg?v=8b6c5b8f0869dbc31a17b8ca3b61fa65b079c8f61f8cc060e82c489c64ee3a4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
