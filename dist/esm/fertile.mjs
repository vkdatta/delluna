export const name="fertile";
export const id="dl_b801d21f06f26381edf8";
export const url=new URL("../icons/fertile.svg?v=4c815cd25ac874f825a98d638c2e73836a189a0c7fbb4b7d34928e9213174721",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
