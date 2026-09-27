export const name="arrow-fat-line-up-thin";
export const id="dl_a5c24fe529674ea29484";
export const url=new URL("../icons/arrow-fat-line-up-thin.svg?v=05c6a9a75d9cdc11f4ad3ec6febf66638e05fae8459455773bcd83c9e6d6d2d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
