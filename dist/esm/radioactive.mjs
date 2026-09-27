export const name="radioactive";
export const id="dl_9d44402010e941cea5b1";
export const url=new URL("../icons/radioactive.svg?v=0920a30349bbc278a52e72503b230583899dbcbba54d674e708a2dc4bcd2dc68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
