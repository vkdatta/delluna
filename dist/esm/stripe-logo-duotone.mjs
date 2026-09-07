export const name="stripe-logo-duotone";
export const id="dl_988ca9a98f1c4bc5b9f3";
export const url=new URL("../icons/S/stripe-logo-duotone.svg?v=859b0ba256aa31a9d8de010b8ac120f61fc620d0bef261f53d16595e7cf6bade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
