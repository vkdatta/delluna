export const name="frame_person_mic";
export const id="dl_ad9d3db354aee3010ca0";
export const url=new URL("../icons/frame_person_mic.svg?v=b6ddf50cbdaace8d543981130a829b9a034a2b2dee009c05bce51cdf5018db51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
