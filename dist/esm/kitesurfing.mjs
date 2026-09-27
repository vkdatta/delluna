export const name="kitesurfing";
export const id="dl_c087688487642e3ede1f";
export const url=new URL("../icons/kitesurfing.svg?v=d14583508bd65ac66761cd749e8f22f064664c5c93ff153d82978b8583006fed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
