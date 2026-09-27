export const name="push-pin-simple-slash-fill";
export const id="dl_d0a97b93b477427da963";
export const url=new URL("../icons/push-pin-simple-slash-fill.svg?v=1f482c8f239cbf87767c45bdb13a9fb4af8b92b5e83906f0cbf1a659fc9b5231",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
