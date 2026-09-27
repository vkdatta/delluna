export const name="lucid_2-list-clock";
export const id="dl_4b2004de5daa4a82834e";
export const url=new URL("../icons/lucid_2-list-clock.svg?v=c588e8db8e3c8ef051d7e5fa72cc8294d5d3e5085efc21ce2243f467a49ed913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
