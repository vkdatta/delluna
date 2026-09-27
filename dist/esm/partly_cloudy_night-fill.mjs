export const name="partly_cloudy_night-fill";
export const id="dl_8b6c3c7ce72a8e7c1467";
export const url=new URL("../icons/partly_cloudy_night-fill.svg?v=e4c52a075c20a6cde61eeba85fa95fe672f36ded7a6a587175df19f52f61cc4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
