export const name="arrow_stem";
export const id="dl_45c7abc018b54602a778";
export const url=new URL("../icons/arrow_stem.svg?v=ab809c22ab8a00605f4108522c74eb3f7fb9e445ec99dac8142c808ee91a19c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
