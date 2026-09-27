export const name="slideshow-fill";
export const id="dl_b231bb160f8aa2bca415";
export const url=new URL("../icons/slideshow-fill.svg?v=60e1ff1d8082c531797e038cca2cace7133ff2bb22a6eb7ced12f56f8391db51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
