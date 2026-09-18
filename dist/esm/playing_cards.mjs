export const name="playing_cards";
export const id="dl_7151c41573e34a6793dd";
export const url=new URL("../icons/P/playing_cards.svg?v=9483f9c8f5c4289d70e14dae4473cf65fa97bfb3e53e1b38de890aa57823553c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
