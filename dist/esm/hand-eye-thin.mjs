export const name="hand-eye-thin";
export const id="dl_fe5ec59c7553421e859f";
export const url=new URL("../icons/hand-eye-thin.svg?v=696eda183ba5d03f4f48c8dfbbf5a702e1f51b52cd77d8ebb29c4f36c74a0610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
