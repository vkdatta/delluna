export const name="explosion-fill";
export const id="dl_12c72bd4cfefa61bb285";
export const url=new URL("../icons/explosion-fill.svg?v=f25ab74e56d23cea1fcadf3f7453e38f44d96e33b6bb752a7e9314c3a601522f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
