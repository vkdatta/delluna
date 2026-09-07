export const name="dots-six-vertical-bold";
export const id="dl_4de3ec8559fd4215a23e";
export const url=new URL("../icons/dots-six-vertical-bold.svg?v=d2226adc97d9449bad231d06210191e2656eb4eed30e7c194cba9878d9929a3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
