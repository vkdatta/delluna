export const name="lucid_1-arrow-up-a-z";
export const id="dl_7d41c6f6c1f74dbfa5cf";
export const url=new URL("../icons/lucid_1-arrow-up-a-z.svg?v=ac907852a676a53a74fcf99c2a16b2e4fbda88fd0baaf9e77401ce31ad63a30d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
