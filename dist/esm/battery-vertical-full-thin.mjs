export const name="battery-vertical-full-thin";
export const id="dl_0c7915fc5d3f40f6ade5";
export const url=new URL("../icons/battery-vertical-full-thin.svg?v=06244823366f076e3a6477f95bfa5613723935e27527c2f9c020b23eb3366b04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
