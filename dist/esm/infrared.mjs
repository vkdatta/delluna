export const name="infrared";
export const id="dl_59018218e6be436f9340";
export const url=new URL("../icons/infrared.svg?v=89de0f3cc19ab9ed869af36dfd9f5762cd6ce35e8d30244fe5763dde3cbc4b65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
