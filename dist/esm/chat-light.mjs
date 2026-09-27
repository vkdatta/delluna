export const name="chat-light";
export const id="dl_d898a3ad314b45abb6dd";
export const url=new URL("../icons/chat-light.svg?v=fe7e3021047ee16e5b4dc9d8df0c015a0c341c83822bbfcd21adc1d411af8ea5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
