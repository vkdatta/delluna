export const name="hand-palm-bold";
export const id="dl_44403990bad441078b10";
export const url=new URL("../icons/hand-palm-bold.svg?v=5843dd71af5951f4135c78868f50e7a33985762e6eb3a71f79d1161d5fc4d4a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
