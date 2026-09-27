export const name="cigarette-slash-bold";
export const id="dl_c31a4f0e23b14b9c8eb9";
export const url=new URL("../icons/cigarette-slash-bold.svg?v=308baab36cfe74a49b003b39557556d5a44da33fb23df4eaddb573e50d3f2fc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
