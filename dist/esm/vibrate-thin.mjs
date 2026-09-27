export const name="vibrate-thin";
export const id="dl_11f41ce30b845f897c1d";
export const url=new URL("../icons/vibrate-thin.svg?v=fdc711fea203bbade06467ca11a8da93b0cf9fa94080b94e7203b7e8ed77ecc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
