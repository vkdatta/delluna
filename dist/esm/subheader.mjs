export const name="subheader";
export const id="dl_f3b539fbad344a471873";
export const url=new URL("../icons/subheader.svg?v=90f63cba1e9e94458e5fafcf648d68024181d8648cc308dc56050714302ef106",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
