export const name="golf-light";
export const id="dl_7b5ae2d51be64afe98c1";
export const url=new URL("../icons/golf-light.svg?v=1328ada2b15cd228d0c796749329217265f27e64d211d0c7647dbd35cb53a73b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
