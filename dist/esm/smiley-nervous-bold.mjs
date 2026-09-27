export const name="smiley-nervous-bold";
export const id="dl_76b0da3568f9fcb25b20";
export const url=new URL("../icons/smiley-nervous-bold.svg?v=37e5e638b762fb5ccefb4f2aba4f73ae5d8f9a0f4927be78ddc238a9a7bc5e4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
