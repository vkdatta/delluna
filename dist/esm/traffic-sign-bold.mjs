export const name="traffic-sign-bold";
export const id="dl_a5b3af1edaf5237c8b5c";
export const url=new URL("../icons/traffic-sign-bold.svg?v=0b4ce6910df23393a1e9e6f74d6e6fefc95c513a6ec0a1067424701273d288fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
