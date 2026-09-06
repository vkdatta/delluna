export const name="aperture-duotone";
export const id="dl_4d4345b83b824ee4bd8c";
export const url=new URL("../icons/aperture-duotone.svg?v=dc52ca71ee7adef0482c35ec3197d1a9b07512200326c60b950ffa41d9d013c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
