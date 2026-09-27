export const name="lamp-pendant-bold";
export const id="dl_b2c4d18b3e724dc0a8bd";
export const url=new URL("../icons/lamp-pendant-bold.svg?v=3312d5bab052343dcad5400bc6fe4819d0bf52082a164adb404dc4fdfd65c660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
