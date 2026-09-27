export const name="globe-x-bold";
export const id="dl_925e9f2e41444a028ac9";
export const url=new URL("../icons/globe-x-bold.svg?v=68288632e44c242406f97a8a439f7927114d01bb3a93002c19162f09a269461d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
