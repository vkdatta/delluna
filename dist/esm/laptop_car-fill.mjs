export const name="laptop_car-fill";
export const id="dl_9546bd28fd52df087f41";
export const url=new URL("../icons/laptop_car-fill.svg?v=4785fcce2bce62d8a54d126eac3b3d4584090c60ba9190406f2f548908eebdbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
