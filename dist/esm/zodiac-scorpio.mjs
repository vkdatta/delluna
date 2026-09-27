export const name="zodiac-scorpio";
export const id="dl_971753d2637149188ca1";
export const url=new URL("../icons/zodiac-scorpio.svg?v=fdf9fb69edb9cfa30f4d0ccc52148c89728085d04e4de5627b0fa57d6970e713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
