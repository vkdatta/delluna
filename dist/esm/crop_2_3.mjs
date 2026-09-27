export const name="crop_2_3";
export const id="dl_99b64347ab25da57ccd4";
export const url=new URL("../icons/crop_2_3.svg?v=0e4f1b5345ba71e438cc230a9381b10c5c71b61e904cdc514ac8107e0f5a1ad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
