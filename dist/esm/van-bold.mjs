export const name="van-bold";
export const id="dl_315cf08b42c24e7380bb";
export const url=new URL("../icons/V/van-bold.svg?v=4aba510c57076f200733e1dab8ea74ca42aaeb894fe8ca8385384e28c5d868ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
