export const name="camera-slash";
export const id="dl_aae03afe97f04f668e79";
export const url=new URL("../icons/camera-slash.svg?v=beda7bcb31172d637d465d2333c96764a21fba4fb60d96bee62930dde7ddd553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
