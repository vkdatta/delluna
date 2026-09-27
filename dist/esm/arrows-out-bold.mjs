export const name="arrows-out-bold";
export const id="dl_53037649dc754c0287df";
export const url=new URL("../icons/arrows-out-bold.svg?v=961102db083e81db7d43e407ce88954b6c0498a1738a421ec77f972666d72ec1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
