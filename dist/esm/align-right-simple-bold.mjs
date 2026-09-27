export const name="align-right-simple-bold";
export const id="dl_bdefc378b580445db536";
export const url=new URL("../icons/align-right-simple-bold.svg?v=2f9bebc2638c76973db35e7de79c4d715f6f89791258c1630cb9e405f3a8eed9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
