export const name="kid_star-fill";
export const id="dl_39ae57dc2ac8f6e94cc6";
export const url=new URL("../icons/kid_star-fill.svg?v=a98c7a979292ad171c6eacc5ea6b946fc55a31a21c2d77cdae7d344f737328fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
