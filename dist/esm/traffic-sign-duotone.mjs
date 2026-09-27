export const name="traffic-sign-duotone";
export const id="dl_6affc833f4bfd34cfc19";
export const url=new URL("../icons/traffic-sign-duotone.svg?v=7c853017d3953f4c3f8681829078a73bcbbd8374c117a94beb5c7d3139908d19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
