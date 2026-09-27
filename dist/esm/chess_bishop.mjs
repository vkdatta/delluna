export const name="chess_bishop";
export const id="dl_897a8fe52e8d6b2e4089";
export const url=new URL("../icons/chess_bishop.svg?v=376afe0448699e8791301a1a24e90299ef69bd8431e3bd5df77f20026a3809d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
