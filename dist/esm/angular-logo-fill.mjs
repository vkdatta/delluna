export const name="angular-logo-fill";
export const id="dl_61c9e27a5a32480d9da0";
export const url=new URL("../icons/angular-logo-fill.svg?v=6219598a0ec6856ca6556fa2c34d28bf04c5c243ab90de463480b3da0ff94132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
