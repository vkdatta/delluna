export const name="flask";
export const id="dl_a054e70ece9443eeb443";
export const url=new URL("../icons/flask.svg?v=a308ccfb07823e2d63c0c8a5d15621ff017bcd9ec3f9bcef6d9e9953f1e7cbc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
