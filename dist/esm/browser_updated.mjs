export const name="browser_updated";
export const id="dl_b084e8371c13de5b459a";
export const url=new URL("../icons/browser_updated.svg?v=9ab55b0cbd967a778a28ef1b8a73f29b1791ab43ad74c063d874e4e70fe0e7dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
