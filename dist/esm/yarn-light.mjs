export const name="yarn-light";
export const id="dl_9a061621a1654644b607";
export const url=new URL("../icons/Y/yarn-light.svg?v=0a68db9c7a99312e49dac094cd074c236d5569bd8851bb562f798d7346a57a30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
