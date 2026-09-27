export const name="car_gear";
export const id="dl_c710d52ba1e12896b947";
export const url=new URL("../icons/car_gear.svg?v=61e49bda3e37d9937aff63a542fc2ebf14dd941381e27f7185b1ab291accd688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
