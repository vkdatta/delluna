export const name="caret-circle-up-down-bold";
export const id="dl_74ed0bc314cc411c9c09";
export const url=new URL("../icons/caret-circle-up-down-bold.svg?v=ff46f9fbfb67c5d2623c56868f6198d138d7ff5066139f06e2b82c49336a0d7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
