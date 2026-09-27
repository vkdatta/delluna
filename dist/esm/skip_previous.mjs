export const name="skip_previous";
export const id="dl_f59d196477bf960c74c7";
export const url=new URL("../icons/skip_previous.svg?v=562ad53bed5f296337136e29a60443d66fa1039f79950015322734769d41ed7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
