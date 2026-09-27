export const name="sauna-fill";
export const id="dl_0aaebbed6a97b9e387ba";
export const url=new URL("../icons/sauna-fill.svg?v=5dfe32112cf6cd9e3f425de18e734a5138187ffbc09a96c976579ef26a526ec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
