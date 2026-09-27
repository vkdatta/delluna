export const name="alien-thin";
export const id="dl_bf700c492c0145769291";
export const url=new URL("../icons/alien-thin.svg?v=840666688f0b4dac3176e3a479e26b3bc1cb4606708a17289ab72fd9462be35f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
