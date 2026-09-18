export const name="personal_bag-fill";
export const id="dl_be46d260f67641429e17";
export const url=new URL("../icons/P/personal_bag-fill.svg?v=8a31f9d4a85ff2a2c28b3407d7e82840c710e0cd88b29b60fc6e04e67b1b86c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
