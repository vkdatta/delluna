export const name="terminal-thin";
export const id="dl_9cc6babef1fa3b4c0d43";
export const url=new URL("../icons/terminal-thin.svg?v=916fc50decb6caee9b9ac3ebc53bc3673dd093ad9606ddac1b7977177b3e7e21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
