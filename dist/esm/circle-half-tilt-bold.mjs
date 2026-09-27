export const name="circle-half-tilt-bold";
export const id="dl_2b22a44f74f74f48a606";
export const url=new URL("../icons/circle-half-tilt-bold.svg?v=77a2dec8109bddf26388da421020e6e2cbcd5fa08730896799305f1d94487bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
