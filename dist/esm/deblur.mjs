export const name="deblur";
export const id="dl_808efc63d3db9f0efeaa";
export const url=new URL("../icons/deblur.svg?v=5dcc76d216bf67be8a16bedf98d014660e6ab57155fb71e77b4fe1f549f20d0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
