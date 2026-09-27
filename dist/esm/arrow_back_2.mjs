export const name="arrow_back_2";
export const id="dl_96042d82cefa3c92cab6";
export const url=new URL("../icons/arrow_back_2.svg?v=dc44ee7400a0a1d33d62afcd37417bf68bb389cbd05bd1b36cbaa6ee6844a53f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
