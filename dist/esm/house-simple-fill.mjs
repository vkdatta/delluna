export const name="house-simple-fill";
export const id="dl_898991284aa24351b4b2";
export const url=new URL("../icons/house-simple-fill.svg?v=b8c2abc9e9c4d5bc58f6183bd748dd9d1af29f86c5be49bae7ac1fa2542c6768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
