export const name="bell-simple-slash-duotone";
export const id="dl_d7af9e2f92f945638cc4";
export const url=new URL("../icons/bell-simple-slash-duotone.svg?v=03a8761f96e4ec7e16e30c42c60a63e3950008629de3e4ae84e3cdda94a40320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
