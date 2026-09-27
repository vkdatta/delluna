export const name="thermometer-hot-light";
export const id="dl_99bd4fd0837d721b9ea7";
export const url=new URL("../icons/thermometer-hot-light.svg?v=b16f79adb0366dfb6f4a7b07c1bf7a9ce354b1f1d6ba70d3df4956cf148ec726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
