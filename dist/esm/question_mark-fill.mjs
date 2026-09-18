export const name="question_mark-fill";
export const id="dl_b99a91ffd6574159a2f9";
export const url=new URL("../icons/Q/question_mark-fill.svg?v=43a8a2b1be084eca908b06de165e5a2f4bf15ce5afb831409de3bc7637cc79e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
