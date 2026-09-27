export const name="envelope-open-bold";
export const id="dl_5863e68bb0874143a215";
export const url=new URL("../icons/envelope-open-bold.svg?v=d18d304d157d875c9ecd36d4ca091e268517d0eda8ecd42d048f20ad5d4619c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
