export const name="square-user";
export const id="dl_5a753f51990f475b8320";
export const url=new URL("../icons/square-user.svg?v=3f6c331a7430eff7399e7821707ab0ba7e3eba2650ac90c10e9fb15159bf9aa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
