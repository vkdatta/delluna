export const name="text-align-justify-thin";
export const id="dl_5c0a31ce39f723160c08";
export const url=new URL("../icons/text-align-justify-thin.svg?v=6c194a83ab162ae51b60f2a82b40396ad7ea9c5edfc27adca74b53eb2a4824bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
