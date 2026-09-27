export const name="push-pin-simple-slash-duotone";
export const id="dl_6e66ebdb8915419787c2";
export const url=new URL("../icons/push-pin-simple-slash-duotone.svg?v=71629e1a19d20e2fec39c4c4d3a6230c545004011e193b2c539b4c3a94a98474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
