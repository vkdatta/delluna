export const name="rss-simple-light";
export const id="dl_a795126f75794691b579";
export const url=new URL("../icons/rss-simple-light.svg?v=f65e49ad1b17d5016866271f7e45db123b955feb5ca1a1b1004d4f2ede258b2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
