export const name="function-bold";
export const id="dl_a7f6cd1a572b47bbb17d";
export const url=new URL("../icons/function-bold.svg?v=0d9c6bc5765e3cf376bfb1743b44624cde2c2c3ae0adfb0465c658e9cec95473",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
