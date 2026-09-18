export const name="width_normal";
export const id="dl_15a1209aebcd4ef19bd5";
export const url=new URL("../icons/W/width_normal.svg?v=9e50399c575146604e31a6a79c3992661c1283fb1b64444843a1d7641f4a08c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
