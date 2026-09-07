export const name="twitter-logo-thin";
export const id="dl_88530caa61744a31acf7";
export const url=new URL("../icons/T/twitter-logo-thin.svg?v=97904645587ae4e289e4f82e5c49e92561ddf674ea8358a6ddfd198957c162bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
