export const name="signal_cellular_alt";
export const id="dl_578350e029b6d6b7559a";
export const url=new URL("../icons/signal_cellular_alt.svg?v=05c1786474188202d37ab65e22a762240cef8b80ad2baa176530e5e8a5df7774",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
