export const name="cassette-tape-bold";
export const id="dl_52d0652457bd466b85ac";
export const url=new URL("../icons/cassette-tape-bold.svg?v=1516b5c090eb7fbbd956c9f23145a30ea132d187cdf7f8ac3a63a1c9ef505fd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
