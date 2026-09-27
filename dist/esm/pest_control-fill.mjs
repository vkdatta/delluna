export const name="pest_control-fill";
export const id="dl_0d353e40498459ddaccd";
export const url=new URL("../icons/pest_control-fill.svg?v=76732b7a44e8d65be6593d4cfa9eca306d23bab909a39328fb715f9b1a967fe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
