export const name="japanese_flag";
export const id="dl_9a811bc257dc215aec6a";
export const url=new URL("../icons/japanese_flag.svg?v=7d71d777a47cc399f092ce3d26913988e7681dc0e426f24e5122659e7771df74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
