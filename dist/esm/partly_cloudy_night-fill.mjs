export const name="partly_cloudy_night-fill";
export const id="dl_754fe08c4fd340d88f54";
export const url=new URL("../icons/P/partly_cloudy_night-fill.svg?v=ea6f92bc483e173fc2790a294fafccf1b5d0d79df31a99c0ecdd1c9d9d7a20a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
