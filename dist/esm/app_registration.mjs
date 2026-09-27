export const name="app_registration";
export const id="dl_318bfa29da9158ac7e13";
export const url=new URL("../icons/app_registration.svg?v=3d327924edc60a1039b636cfb2a590d9011ca4442678bf4d3ca881b821403d2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
