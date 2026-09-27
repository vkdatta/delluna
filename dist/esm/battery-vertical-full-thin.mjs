export const name="battery-vertical-full-thin";
export const id="dl_0c7915fc5d3f40f6ade5";
export const url=new URL("../icons/battery-vertical-full-thin.svg?v=67f5b024b59fee2fb4bce57e50960623d73de0e311f8008d7e3bf6f5d6d758dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
