export const name="toys_and_games";
export const id="dl_c0ad8ccd6f082038fff9";
export const url=new URL("../icons/toys_and_games.svg?v=233f8d2182afd24f14e97f11346d1600693e2bda2462192cd9f722cef36de33d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
