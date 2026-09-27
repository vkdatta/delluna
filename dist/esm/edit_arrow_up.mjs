export const name="edit_arrow_up";
export const id="dl_2cc4780e7981ed5f40a1";
export const url=new URL("../icons/edit_arrow_up.svg?v=cc00a6e406759de335bca52aba9d80ccac9566de1937958d61670648aa0ca073",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
