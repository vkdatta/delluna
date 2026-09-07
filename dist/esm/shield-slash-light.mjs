export const name="shield-slash-light";
export const id="dl_00ff22790c1f45e9ac5a";
export const url=new URL("../icons/S/shield-slash-light.svg?v=40186ea35793cd357971d625c4844d70cc18c1d7cccd9b1e5e7dbe2cde41da84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
