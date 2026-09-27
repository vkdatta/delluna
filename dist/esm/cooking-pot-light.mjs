export const name="cooking-pot-light";
export const id="dl_bd64f3e79ffa45e785c0";
export const url=new URL("../icons/cooking-pot-light.svg?v=7752f427614868581a3faf470ace9774dcb2af081aec4ca9ec7ba9c99b28788b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
