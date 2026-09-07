export const name="shield-slash";
export const id="dl_0da820e1e4ab4366bd46";
export const url=new URL("../icons/S/shield-slash.svg?v=0d4a7ab081a4e430faf6dc4ff9eedee9d007a650f40fb91d4fdf55f1455a7fc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
