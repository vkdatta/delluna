export const name="lucid_2-disc";
export const id="dl_ade8eada76aa44498331";
export const url=new URL("../icons/lucid_2-disc.svg?v=13200d74867cae7bbbde88c7c690167499532a7b2ba08db9512855893ad39084",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
