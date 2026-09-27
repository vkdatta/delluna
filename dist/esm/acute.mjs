export const name="acute";
export const id="dl_69a8294beaf49f6f1680";
export const url=new URL("../icons/acute.svg?v=bf8cef5d06698aea5512483c704f3c2a220ee3a9f7e9d1d1097acf4ce268b0ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
