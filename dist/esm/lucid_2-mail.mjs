export const name="lucid_2-mail";
export const id="dl_4c21df6293a441d2bdae";
export const url=new URL("../icons/lucid_2-mail.svg?v=3653db6540616cb534ccf360170e55e19411d5825c022fe96680fb493e75a993",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
