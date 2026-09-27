export const name="dictionary";
export const id="dl_185479214fe617d4aa35";
export const url=new URL("../icons/dictionary.svg?v=ea1474eafcece7d2efb2798f75ce75dae06228d10eb2a7e9c2e0673d0c7156ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
