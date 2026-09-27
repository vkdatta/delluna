export const name="globe-simple-x-bold";
export const id="dl_9750187ea59d4da793fb";
export const url=new URL("../icons/globe-simple-x-bold.svg?v=c4ca4bf1d03a58812424451e47c36ff834f5274194baa436b354bd788449ef91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
