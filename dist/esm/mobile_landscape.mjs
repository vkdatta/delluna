export const name="mobile_landscape";
export const id="dl_3cfac231e394034086c0";
export const url=new URL("../icons/mobile_landscape.svg?v=ab9549f9b0748ccef99f63786161446a0253546c07c5c685f94df25441bcee14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
