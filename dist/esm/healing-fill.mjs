export const name="healing-fill";
export const id="dl_a536e809698eea59beae";
export const url=new URL("../icons/healing-fill.svg?v=ac73d4974f029093ddc7b7475c00ff584fc7be358f5cb08d1a2f2ee67ea45d25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
