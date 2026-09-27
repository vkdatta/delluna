export const name="book_5-fill";
export const id="dl_1f97e51b18238c9bd2d3";
export const url=new URL("../icons/book_5-fill.svg?v=de9cf529c692da0b4efb66443ec2c1429d3a8a93945e2dccd085c4c2b28d8989",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
