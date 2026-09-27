export const name="test-tube-bold";
export const id="dl_48279540b573204cff1e";
export const url=new URL("../icons/test-tube-bold.svg?v=1db5f239c8fe5d417482a7964102f23d887842111333007ba224a140c9e4c051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
