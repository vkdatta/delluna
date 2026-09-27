export const name="exclude-bold";
export const id="dl_1fa9a1b614af4d98bee6";
export const url=new URL("../icons/exclude-bold.svg?v=5ba31e25d1bba39519871de71092e6ae2699b58f122932572bbb4fc521b474aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
