export const name="clean_hands-fill";
export const id="dl_fbf2c5fdbe37ec8d51a2";
export const url=new URL("../icons/clean_hands-fill.svg?v=1f0eccfd98c779860e05303d36294acabeb6914a39533e259c08383959e12c42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
