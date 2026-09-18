export const name="partly_cloudy_night";
export const id="dl_a69a5e62fb76435487fc";
export const url=new URL("../icons/partly_cloudy_night.svg?v=696cc88f522e33663856ce2c2df00ae8bdf3d828a07715ad5775489eb09de789",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
