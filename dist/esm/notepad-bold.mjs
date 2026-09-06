export const name="notepad-bold";
export const id="dl_d6c025e0177c463088d6";
export const url=new URL("../icons/notepad-bold.svg?v=4b11fd7e02c4f64565a9d308ff98d54e8398eddb69dcc3e95c9f9af5339bb414",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
