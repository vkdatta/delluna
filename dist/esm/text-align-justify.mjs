export const name="text-align-justify";
export const id="dl_6965a67137ce4b0192e4";
export const url=new URL("../icons/text-align-justify.svg?v=1b40fc03f62f0e374b3f8398148555d2f7fbe8610a79e3c416fd0cd5c1d280dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
