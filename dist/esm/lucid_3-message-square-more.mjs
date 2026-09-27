export const name="lucid_3-message-square-more";
export const id="dl_66ae719ede0c4cfe859b";
export const url=new URL("../icons/lucid_3-message-square-more.svg?v=34ebe6c378ee7ecc5cbcfa93a6d517889fde476ddb259e3f16824681775d4534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
