export const name="cyclone-fill";
export const id="dl_5909d9e58468dc00913e";
export const url=new URL("../icons/cyclone-fill.svg?v=481b71762c5847100d98af5b0d66fd0f41aa6af5dd3867e6bc37be53443e82a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
