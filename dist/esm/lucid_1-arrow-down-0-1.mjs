export const name="lucid_1-arrow-down-0-1";
export const id="dl_597e7dea3e59497991ab";
export const url=new URL("../icons/lucid_1-arrow-down-0-1.svg?v=e8eb98cc0e4fe9ce4c01c160029549057cbd14e0da9e96f274f130db36822ad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
