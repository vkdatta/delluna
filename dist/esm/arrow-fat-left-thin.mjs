export const name="arrow-fat-left-thin";
export const id="dl_96de9cb464b04cf7832a";
export const url=new URL("../icons/arrow-fat-left-thin.svg?v=81312395661adecb96bf4de68ab1b145ff75603901f96c2d9b6513b2ccf065b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
