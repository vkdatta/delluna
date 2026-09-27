export const name="text-align-justify-bold";
export const id="dl_a52e57e4f895962da16e";
export const url=new URL("../icons/text-align-justify-bold.svg?v=4db7b5900364bd256548814cd6c0d1e0b4e0e8838335177c84333588d8096cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
