export const name="group-fill";
export const id="dl_d1dea066b358c2733073";
export const url=new URL("../icons/group-fill.svg?v=39edc7a6fba5d7f3a7a0f1a5a04b7ae5d5a1493201f549536ca28f858d6faffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
