export const name="rotate_90_degrees_ccw-fill";
export const id="dl_dadbfaa4fd791c81bdfa";
export const url=new URL("../icons/rotate_90_degrees_ccw-fill.svg?v=6d76e96e225ffb3ab24c255fc808ebdb04c194b6b854bbf7d4d7930a97970983",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
