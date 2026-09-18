export const name="fire_hydrant";
export const id="dl_d29cdadecb0d4f0cb1cd";
export const url=new URL("../icons/fire_hydrant.svg?v=950513182a650e31d170718862866c2e069b8fd014131d38c21e5dcc5982fa4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
