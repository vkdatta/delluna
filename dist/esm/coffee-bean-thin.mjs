export const name="coffee-bean-thin";
export const id="dl_a7083d973a2542e8b2c3";
export const url=new URL("../icons/coffee-bean-thin.svg?v=91e0cf0605a7e6a5b6111ffdb8b9764bdc1d8e5f250f189537e27c582baa0c6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
