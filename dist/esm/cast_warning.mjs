export const name="cast_warning";
export const id="dl_35e72bdffc7589041561";
export const url=new URL("../icons/cast_warning.svg?v=b0dc68752468d649ea35dbcd49c4e7fb5ea5705c4d8eab1ad07c5f9ebd0b08df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
