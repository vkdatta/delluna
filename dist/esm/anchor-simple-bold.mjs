export const name="anchor-simple-bold";
export const id="dl_236d132ac17944bdb12e";
export const url=new URL("../icons/anchor-simple-bold.svg?v=b75d150e7ff8495301c40d9da5a31c8007b629b759433516496733b412c39cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
