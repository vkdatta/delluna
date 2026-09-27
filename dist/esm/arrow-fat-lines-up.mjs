export const name="arrow-fat-lines-up";
export const id="dl_9c0b9e0331f14bb2a2bb";
export const url=new URL("../icons/arrow-fat-lines-up.svg?v=27621f611b83b20adf1d19cded7e6d3c66917804e5235732de2d3d34083282d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
