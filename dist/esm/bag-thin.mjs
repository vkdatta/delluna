export const name="bag-thin";
export const id="dl_329df036b65b4bbd85bc";
export const url=new URL("../icons/bag-thin.svg?v=3b0d11b918ececfeef5bdcae542daad4c181a102b26fd14ab0292178b7c3ee87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
