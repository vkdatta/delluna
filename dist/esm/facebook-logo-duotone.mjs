export const name="facebook-logo-duotone";
export const id="dl_ea71d339878d448980b4";
export const url=new URL("../icons/facebook-logo-duotone.svg?v=d324fb880726f5006180bac0ac26438e01c3e65b07c21d53703123994d3e9eaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
