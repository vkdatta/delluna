export const name="lucid_3-message-square-x";
export const id="dl_71493871eca447848666";
export const url=new URL("../icons/lucid_3-message-square-x.svg?v=45040865b119e8a2a1c4bacb6bb980ab338d8f740a292dedb9160d2d2f3281cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
