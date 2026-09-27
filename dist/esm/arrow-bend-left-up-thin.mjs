export const name="arrow-bend-left-up-thin";
export const id="dl_c1957a47cffb405581db";
export const url=new URL("../icons/arrow-bend-left-up-thin.svg?v=cc0a09ea5576248704d3e6d844fcc02866708cb56c74625285865b5bb8e9cf7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
