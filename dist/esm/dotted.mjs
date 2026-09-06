export const name="dotted";
export const id="dl_ca899a68e9ff4818a432";
export const url=new URL("../icons/dotted.svg?v=65ce79b39f18a02fabad464ebc3f9fa738273f09dafafe95ed84c4e2caa153c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
