export const name="playground";
export const id="dl_a0b484aceb724febb057";
export const url=new URL("../icons/playground.svg?v=69656b0bddc6e6c1cca98a6be9e7f6b87e2a3e5dacca74233c0f4c09b047e7f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
