export const name="find_in_page";
export const id="dl_a994767638fb37689d04";
export const url=new URL("../icons/find_in_page.svg?v=7faadf8ed46df5c34df6d3e83826432998dc2e08581f933c598d850ad342483e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
