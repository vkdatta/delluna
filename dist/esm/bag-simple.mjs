export const name="bag-simple";
export const id="dl_d3ef483e61174290b03f";
export const url=new URL("../icons/bag-simple.svg?v=3f0e939f3789d5751a8915c0e42f0c4eafc172f61e8fa58ea4732ad855e47012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
