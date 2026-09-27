export const name="lucid_3-send";
export const id="dl_8d00aedec33444ea8191";
export const url=new URL("../icons/lucid_3-send.svg?v=3eaba159511b8ba44b45043d64c69d368f5b5c06e9eace217b7e0d41d2a3c2a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
