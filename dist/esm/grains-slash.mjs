export const name="grains-slash";
export const id="dl_9bd5f59c149a4927a125";
export const url=new URL("../icons/grains-slash.svg?v=aeb359e66395f126cfb3018d1d190bd50f75602a8fdadf998f648c3f78e57cfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
