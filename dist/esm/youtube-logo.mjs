export const name="youtube-logo";
export const id="dl_7f86fceaf7d341babd15";
export const url=new URL("../icons/Y/youtube-logo.svg?v=36a9a9189833c1b5bc53e2c165a58605d1e07383e2535ea633c5c1355b849550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
