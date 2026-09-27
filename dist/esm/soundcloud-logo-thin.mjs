export const name="soundcloud-logo-thin";
export const id="dl_a85460644649d9a5eaff";
export const url=new URL("../icons/soundcloud-logo-thin.svg?v=c56bebd5dd0aaacebfa478c3af83a6496aa73f8dff1c19ab88ed11041f31bbed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
