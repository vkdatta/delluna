export const name="fallout-shelter-thin";
export const id="dl_d53252257ff04cc29480";
export const url=new URL("../icons/fallout-shelter-thin.svg?v=c6e56481d8a9378bb5053befb2174e78b98fe5d83d32279252771684362ae39d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
