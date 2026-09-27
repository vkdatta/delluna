export const name="tally-2";
export const id="dl_151768dbfae84f6bb3e1";
export const url=new URL("../icons/tally-2.svg?v=74d35253ff742ecb9f376c325aad8ee9e1b6469d34b7764b8fb42f12ba3dcbd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
