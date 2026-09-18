export const name="hr_resting";
export const id="dl_2c81a71471d64206809a";
export const url=new URL("../icons/H/hr_resting.svg?v=2b7ef28de20dddf6e464c8f3acff71978ad5a946e1c8c446c2b0485195c33358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
