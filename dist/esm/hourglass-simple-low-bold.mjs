export const name="hourglass-simple-low-bold";
export const id="dl_6c74761d7e084c4f9441";
export const url=new URL("../icons/hourglass-simple-low-bold.svg?v=525042a0d19f24220539a9e60565fe47d762dee160c6269600a798f7d7ecefca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
