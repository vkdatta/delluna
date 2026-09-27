export const name="picture-in-picture-duotone";
export const id="dl_05db70c023544e888511";
export const url=new URL("../icons/picture-in-picture-duotone.svg?v=96cd3814cd05ccd447b081742591139c8014f04328a837dedf98f9e6cfdb740f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
