export const name="link-simple-break";
export const id="dl_3a5177b9e14a4a50ba8e";
export const url=new URL("../icons/link-simple-break.svg?v=c983ef2127ac2c9c7872ba81586ca00083a2e2b9829200e63d3db4bef7200ca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
