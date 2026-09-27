export const name="arrow-fat-lines-up-light";
export const id="dl_4aae584ff1864c87a99e";
export const url=new URL("../icons/arrow-fat-lines-up-light.svg?v=6959abdc326aa50df95b6bcf324c8f69debc6f41fae0db6a93d88568f9b1eb14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
