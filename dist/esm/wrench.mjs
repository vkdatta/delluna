export const name="wrench";
export const id="dl_73068e58dea64e4386ec";
export const url=new URL("../icons/W/wrench.svg?v=690d657aa4a9c99d620583cf6247cfefa5372c10e2bc60e9255a3ce19e3e9c47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
