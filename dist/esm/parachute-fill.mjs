export const name="parachute-fill";
export const id="dl_7f2dfc8098ab494eba03";
export const url=new URL("../icons/parachute-fill.svg?v=7224150bd1ef87401db54f612e1fd18f00471a37f0be209dd791d6dc8c462ef4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
