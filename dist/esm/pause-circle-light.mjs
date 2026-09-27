export const name="pause-circle-light";
export const id="dl_f1dac52679fa47f6a91e";
export const url=new URL("../icons/pause-circle-light.svg?v=bf93870769e60fe48e93a72e5678135ca341b2214fa47767bbc0cbe3f8586a60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
