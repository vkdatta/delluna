export const name="score";
export const id="dl_7f9e63300e6f47cc8070";
export const url=new URL("../icons/S/score.svg?v=c89718fa144f0e3bd152f2b6d4af54fbf85f01529eb22b7406995ea3c3d1a59f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
