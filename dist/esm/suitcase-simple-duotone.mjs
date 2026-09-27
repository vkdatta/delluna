export const name="suitcase-simple-duotone";
export const id="dl_3faca793a588ec12ba8a";
export const url=new URL("../icons/suitcase-simple-duotone.svg?v=f9a78d92fd808003b87856bcaa4d28687051dbc99a4fc9a252204b8b9ba2e159",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
