export const name="gps-slash";
export const id="dl_4f253276145e4cd4b772";
export const url=new URL("../icons/gps-slash.svg?v=a92bfbdc9d4b7c67a1dcedfbb65c31fbb84df7d0f03372b292967bea526bee7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
