export const name="swap_vertical_circle";
export const id="dl_4d6514d6e3c01e4e1a9d";
export const url=new URL("../icons/swap_vertical_circle.svg?v=7e87e4748c22ba0d1cfc90837942c8ef331758e2a98d6a0dc5af63dcd542e7c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
