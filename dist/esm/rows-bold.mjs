export const name="rows-bold";
export const id="dl_604e3cd7634943cfab7e";
export const url=new URL("../icons/rows-bold.svg?v=71e4b7c0d36310190189aa22c9b27010fec8929dca22c8fc2c4ef5fa7fb8c763",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
