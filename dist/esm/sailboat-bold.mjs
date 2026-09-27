export const name="sailboat-bold";
export const id="dl_0c2abfe5645c06ca9da5";
export const url=new URL("../icons/sailboat-bold.svg?v=d773e592b0b6fa4efe2239885a4bf84af844f9406ed2b72dc57c998e5e878c4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
