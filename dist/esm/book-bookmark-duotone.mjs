export const name="book-bookmark-duotone";
export const id="dl_906edeb711804e12aeea";
export const url=new URL("../icons/book-bookmark-duotone.svg?v=5e25231e06141fe22f78c373668725a6118a46fcb2ad633fd8a094d1da534ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
