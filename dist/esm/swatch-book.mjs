export const name="swatch-book";
export const id="dl_383d3051f2a54f5dac27";
export const url=new URL("../icons/swatch-book.svg?v=f07683b1ab0baec16754726cf7bf48c08eba4cf970deb561394afff246b455ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
