export const name="smoke_free-fill";
export const id="dl_7f7a6165bb7a5c38e48f";
export const url=new URL("../icons/smoke_free-fill.svg?v=598c500029904c4e58933de5357f5b351a032ce00de036677f93d486f06de74f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
