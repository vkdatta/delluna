export const name="circle-half-tilt-bold";
export const id="dl_2b22a44f74f74f48a606";
export const url=new URL("../icons/circle-half-tilt-bold.svg?v=e0f1d283964cbe1a90eb15e7f94633dab59966193edd3858f52423c893d2e9fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
