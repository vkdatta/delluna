export const name="cloud-warning-light";
export const id="dl_50d5a556cfb64f279037";
export const url=new URL("../icons/cloud-warning-light.svg?v=29e0261fdeb8132c3c2a3c21990eed7c030fa02cd35d24a2ffe6ee47a1af0a38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
