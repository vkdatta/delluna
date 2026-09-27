export const name="lucid_3-shopping-bag";
export const id="dl_228b9bdd15bb4da08a99";
export const url=new URL("../icons/lucid_3-shopping-bag.svg?v=3bebda297a29785942acc5b53801099a8e45e813ba11d64ecb87c6b26f08cd6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
