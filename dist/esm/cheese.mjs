export const name="cheese";
export const id="dl_583ad7eec0b24a7781d2";
export const url=new URL("../icons/cheese.svg?v=5f0d415bfd7d0cc4d14b4b31a5a3f00f012398fc5e34281b447e0881d663d962",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
