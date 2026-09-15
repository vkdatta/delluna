export const name="brightness_6";
export const id="dl_7c96c04f93a748d5ab6f";
export const url=new URL("../icons/B/brightness_6.svg?v=9bae7822a5eea029ad7b9bda92c96721b767e93b70494db9b8806a5253376f42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
