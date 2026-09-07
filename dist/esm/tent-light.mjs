export const name="tent-light";
export const id="dl_948c3fce0708439eaefc";
export const url=new URL("../icons/T/tent-light.svg?v=14822de70b0b785a888538c4841a3738bcef617515d9587bbac0011c04308f10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
