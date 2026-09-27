export const name="lucid_1-apple";
export const id="dl_0ed7f23129d24824b009";
export const url=new URL("../icons/lucid_1-apple.svg?v=35d384b98ca31fae9bc068fc60f6802bee910329128f3e008fe08551861de8ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
