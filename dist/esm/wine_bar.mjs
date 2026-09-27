export const name="wine_bar";
export const id="dl_5088503d27d852f76bd3";
export const url=new URL("../icons/wine_bar.svg?v=68ab08b3db4327b07e51d0ec224a6c125838f863e91e58bdc99f989af1c69e5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
