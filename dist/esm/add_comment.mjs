export const name="add_comment";
export const id="dl_5a9cb21f2de923619bac";
export const url=new URL("../icons/add_comment.svg?v=25dcf3db34484b70943e9b49a7e6a49101f5de7d4329851ee7b97aa38ede6820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
