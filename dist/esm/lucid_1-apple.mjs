export const name="lucid_1-apple";
export const id="dl_0ed7f23129d24824b009";
export const url=new URL("../icons/lucid_1-apple.svg?v=6701e8a3bb4aebd74d0c25e0c02c946b8b4c130d8ad09e817df8953b5b35318c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
