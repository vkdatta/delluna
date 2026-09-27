export const name="facebook-logo-duotone";
export const id="dl_ea71d339878d448980b4";
export const url=new URL("../icons/facebook-logo-duotone.svg?v=6d00b781b3cd2d8562e897a6d905ab4a592c08afee3237b24ea2a67c14ffc03d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
