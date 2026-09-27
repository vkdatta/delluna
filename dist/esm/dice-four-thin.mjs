export const name="dice-four-thin";
export const id="dl_db1ec6774b2b4b169564";
export const url=new URL("../icons/dice-four-thin.svg?v=4fcc5c04ec8dfdf661b802b707410b2921766de21ff5639ee76857da54bb4ed0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
