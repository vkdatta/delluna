export const name="femur";
export const id="dl_0f2408843ff94096976c";
export const url=new URL("../icons/F/femur.svg?v=9d8c982b2f245335aa4f76eb955ad5efc323782c6b5b7162a15a5580198a30f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
