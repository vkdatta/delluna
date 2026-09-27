export const name="aperture-duotone";
export const id="dl_4d4345b83b824ee4bd8c";
export const url=new URL("../icons/aperture-duotone.svg?v=070b99f512cecace6e515265ceb94cca1a4f5cd71ffe83c1769ab713340bb7ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
