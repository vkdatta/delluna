export const name="print_add";
export const id="dl_a1c69dd38b4d550ac73f";
export const url=new URL("../icons/print_add.svg?v=08bd91a384495740997542d2d67b5badc8f6df2270fcce878d48c9f22d2cabd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
