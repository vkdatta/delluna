export const name="bowling-ball-thin";
export const id="dl_841b60a78e904b778280";
export const url=new URL("../icons/bowling-ball-thin.svg?v=4411a66e9eda3dd2f74285ac849e1823332cc91fcd65084f2429c0be7fa6cd3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
