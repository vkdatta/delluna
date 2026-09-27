export const name="car_crash";
export const id="dl_924afc97bc048f1b1fb8";
export const url=new URL("../icons/car_crash.svg?v=b911c0166c9408a5047604f8c9171e391679ca738f06fcc8e9360ec2492e6f0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
