export const name="pen-nib-thin";
export const id="dl_1c580d90840644eb9148";
export const url=new URL("../icons/pen-nib-thin.svg?v=d2045b6f8c813565ac4d6a9acbab3bfc62d77939f47b82527d9f1e3a0f65ff4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
