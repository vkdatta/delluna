export const name="lucid_3-shopping-bag";
export const id="dl_228b9bdd15bb4da08a99";
export const url=new URL("../icons/lucid_3-shopping-bag.svg?v=5a4b58ff843fae78e3d889a17be4dd7667d1c75fdca4c9d5623a3396d90f03af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
