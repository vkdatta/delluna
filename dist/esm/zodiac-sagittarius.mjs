export const name="zodiac-sagittarius";
export const id="dl_312f89347c7644819dcf";
export const url=new URL("../icons/zodiac-sagittarius.svg?v=a13a23fd029c6eca5f778f3c9810f55221613bdd494d0db8438325ad0b3f2502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
