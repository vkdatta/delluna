export const name="lucid_1-bell-electric";
export const id="dl_a50fe189cbfb4ff890f7";
export const url=new URL("../icons/lucid_1-bell-electric.svg?v=5253b8361610628e763d640bf74bfba0fcbf71c64b32cd0db68f4102116a1aa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
