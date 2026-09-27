export const name="square";
export const id="dl_c2a27e0d4c9c160e11c4";
export const url=new URL("../icons/square.svg?v=13dd5698beaca6388842dc5cea77bbd2f121c7c7250d6549552ea4d6a71dc474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
