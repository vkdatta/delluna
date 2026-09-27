export const name="number-circle-four";
export const id="dl_8916af42dceb4e4eb5b9";
export const url=new URL("../icons/number-circle-four.svg?v=69e505816c2e762eb520dd894dd619bff4992c6507205a0bb10710b82c395211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
