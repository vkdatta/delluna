export const name="chalkboard-simple";
export const id="dl_3bfb96946e654cfe8120";
export const url=new URL("../icons/chalkboard-simple.svg?v=9e53c7c7096f9c089129570bba029b9d327d6d81447e8cca2a11b5b5392e4344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
