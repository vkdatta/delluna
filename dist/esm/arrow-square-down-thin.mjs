export const name="arrow-square-down-thin";
export const id="dl_2bb5b2c0f56a4d6f904c";
export const url=new URL("../icons/arrow-square-down-thin.svg?v=70680cd97f9d6faa315626f71f220b4a78a826c468a45a4711f208dbad6bd41b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
