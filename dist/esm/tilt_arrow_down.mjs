export const name="tilt_arrow_down";
export const id="dl_5c6fcd91d4329f4731e5";
export const url=new URL("../icons/tilt_arrow_down.svg?v=90a983e908bdb9bfd68e3a1965e78b87c7d7f3fce5c7e3838a6de1d6b622b1b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
