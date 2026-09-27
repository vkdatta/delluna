export const name="orange-slice";
export const id="dl_2fcc804910a94f488bcd";
export const url=new URL("../icons/orange-slice.svg?v=5a76e515887fcfd37b77500eeadec144c78d945008c2370a184e8b19cb030ce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
