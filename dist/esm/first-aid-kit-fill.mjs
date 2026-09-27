export const name="first-aid-kit-fill";
export const id="dl_fae235eeaf144554908b";
export const url=new URL("../icons/first-aid-kit-fill.svg?v=4cbdcde9f424ed5e2ce588661273b5e2ee886a91eb6accdcff3806815621c0c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
