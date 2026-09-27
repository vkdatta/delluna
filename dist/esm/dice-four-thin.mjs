export const name="dice-four-thin";
export const id="dl_db1ec6774b2b4b169564";
export const url=new URL("../icons/dice-four-thin.svg?v=6feaa0c13975ac60e6ce200e1a32ae75fa4dc71bc1f4f1f227771e2e5a75164f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
