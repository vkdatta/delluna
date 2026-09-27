export const name="lucid_3-shield-check";
export const id="dl_f2ec4fad1dab4c29b473";
export const url=new URL("../icons/lucid_3-shield-check.svg?v=e4668d741cc4dbeb7dbd8c3f47afef7e9b641f415958fb879a1bd5764738c78d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
