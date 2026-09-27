export const name="person-simple-ski-fill";
export const id="dl_4b5fbb2bf5754e1aa405";
export const url=new URL("../icons/person-simple-ski-fill.svg?v=525b2f8467e7aaa3010c623e98686823403d48f3269b79366dcbf792ffba8a25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
