export const name="arrow-fat-up-thin";
export const id="dl_b0c99e6e5205434e9579";
export const url=new URL("../icons/arrow-fat-up-thin.svg?v=d0301a7ecab349883287d18e80a240dc4ecffe152bc1d04d13d6f83d4c42bd97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
