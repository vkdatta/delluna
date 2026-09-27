export const name="tent-bold";
export const id="dl_70803f70c9ed5ded07d5";
export const url=new URL("../icons/tent-bold.svg?v=f1f66c88a1e004941c078bbe629e85f40517fd2d64fa7bae51f9f4e4eda887de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
