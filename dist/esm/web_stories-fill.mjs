export const name="web_stories-fill";
export const id="dl_95d1447447e1bf250ac4";
export const url=new URL("../icons/web_stories-fill.svg?v=bf10c23958aef58ac5cbd5d9c5b0860359b12e641dcb5b5007582a5910e3af0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
