export const name="align-top-simple-light";
export const id="dl_524eda9f09e142be9948";
export const url=new URL("../icons/align-top-simple-light.svg?v=a356ecfd50d4e4de7641e4b09324faa0e2957df535befaeb5582185b39312da7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
