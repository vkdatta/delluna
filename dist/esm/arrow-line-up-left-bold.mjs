export const name="arrow-line-up-left-bold";
export const id="dl_a2d80c24c0484509853d";
export const url=new URL("../icons/arrow-line-up-left-bold.svg?v=a05c1a49c02d32e91a75993428f2f91e32440c4f47206d67bc0c9dc62a02b927",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
