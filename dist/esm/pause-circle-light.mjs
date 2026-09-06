export const name="pause-circle-light";
export const id="dl_f1dac52679fa47f6a91e";
export const url=new URL("../icons/pause-circle-light.svg?v=842b3ba9cab96142aebe1e9cfaf919a3608000c1b742fd8440b5dc81f9de4377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
