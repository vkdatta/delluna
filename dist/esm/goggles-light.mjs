export const name="goggles-light";
export const id="dl_d26dc721b329452bbc5a";
export const url=new URL("../icons/goggles-light.svg?v=46f71fb0680bfc863b765023a3d042b1fa748738b7f4dcfc20817c631f784e27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
