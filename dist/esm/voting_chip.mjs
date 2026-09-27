export const name="voting_chip";
export const id="dl_464945dbd4ca323e1dfb";
export const url=new URL("../icons/voting_chip.svg?v=d379d5480ec31b787b4985bd0212116f751e0fcae966f4ed88f7098f0c53404b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
