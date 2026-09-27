export const name="tornado-bold";
export const id="dl_98c15257e26c228e9522";
export const url=new URL("../icons/tornado-bold.svg?v=32e015c635827b84230fa9087994a384cf227ccd2d1b7622d17273789d2cf54c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
