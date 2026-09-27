export const name="file-arrow-down-light";
export const id="dl_3aa080f4807f4e35a6ae";
export const url=new URL("../icons/file-arrow-down-light.svg?v=8de66ad82e98e664cdfbc7fc9bb0c10d0537fee7ac588b873e5c70b9556cc374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
