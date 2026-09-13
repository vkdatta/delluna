export const name="19mp";
export const id="dl_8aedb3824f414fbd955b";
export const url=new URL("../icons/1/19mp.svg?v=05a2c46c8a3436742eef2448b17738cf3b6730d98e2457119b2a6fde3bbf8a8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
