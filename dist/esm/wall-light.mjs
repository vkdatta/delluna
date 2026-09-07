export const name="wall-light";
export const id="dl_28256695dd0a4e4e85d0";
export const url=new URL("../icons/W/wall-light.svg?v=02a1eac3059966c1ad3f7e15c530355557fb01ad5c4841c180be81f20bad701f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
