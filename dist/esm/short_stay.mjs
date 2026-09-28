export const name="short_stay";
export const id="dl_6014b787a70dc4c4f935";
export const url=new URL("../icons/short_stay.svg?v=987ab951454c5a42edbada56c78118e2af46931e27f3fc7b1a1bc8a85c2ecb6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
