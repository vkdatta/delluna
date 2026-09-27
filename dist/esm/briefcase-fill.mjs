export const name="briefcase-fill";
export const id="dl_dbd21a2440cf42b98d53";
export const url=new URL("../icons/briefcase-fill.svg?v=b5a92d6862310dee5930c175fa8e2e830ebe9ff174b825c86ff51d8e0930c15b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
