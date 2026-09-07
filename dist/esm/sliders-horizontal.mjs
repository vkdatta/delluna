export const name="sliders-horizontal";
export const id="dl_48382ae5195447fbb3cb";
export const url=new URL("../icons/S/sliders-horizontal.svg?v=1d937baa3bc51ec4052364edf30cf8991d550920534f5d413eb9f60535cc1916",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
