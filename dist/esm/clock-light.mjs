export const name="clock-light";
export const id="dl_09ca976ab99845a0a17e";
export const url=new URL("../icons/clock-light.svg?v=32e3071819eab98d5945b06bf7da5a9a0cd15bcbb221d652ad78fb683fe424d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
