export const name="seal-question";
export const id="dl_c3658a364c6c950bc6f2";
export const url=new URL("../icons/seal-question.svg?v=f0610615dd7417a6b89dcd0cc126e04b8c40799a6bbfbcf2e2d0cf8478ab634d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
