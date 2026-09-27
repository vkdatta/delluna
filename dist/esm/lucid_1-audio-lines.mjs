export const name="lucid_1-audio-lines";
export const id="dl_74d9bb4dcfbe4ee8b347";
export const url=new URL("../icons/lucid_1-audio-lines.svg?v=a12733b5cf6eee81722a12e675659e6eac61bc6be27b88ac20dd9123d0d3388f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
