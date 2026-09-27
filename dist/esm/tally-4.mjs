export const name="tally-4";
export const id="dl_eebbc80bcd224a84bbb8";
export const url=new URL("../icons/tally-4.svg?v=f75f553aef22401123c305b4221b29fa56f58db64564a73c3f725d4b01bae285",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
