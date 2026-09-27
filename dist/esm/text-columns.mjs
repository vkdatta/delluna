export const name="text-columns";
export const id="dl_294c4d8eb5ea09a3a4ca";
export const url=new URL("../icons/text-columns.svg?v=047cf278fedbefab7c0999309b1142edaf0d21d18315b2a9dd27ead657ae9cb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
