export const name="church-light";
export const id="dl_8cb0a38871b64dfc83da";
export const url=new URL("../icons/church-light.svg?v=de1fe323fff8390968ab7fc5210aab81515a82c777ac9c119bd0b0f6b34e8eb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
