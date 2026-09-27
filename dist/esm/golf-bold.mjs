export const name="golf-bold";
export const id="dl_d7cc239b9207442ca891";
export const url=new URL("../icons/golf-bold.svg?v=e816c23105c5d731616f0b1c19dcfcc480b5c34ecba127c5346d06bb8c188e6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
