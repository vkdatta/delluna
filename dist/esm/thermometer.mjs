export const name="thermometer";
export const id="dl_24c3474518d21c605f34";
export const url=new URL("../icons/thermometer.svg?v=2ac34754d988b81c4375d70ac2841183aed81c447c9bc4cc818aace38b015aa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
