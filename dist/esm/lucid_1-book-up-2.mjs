export const name="lucid_1-book-up-2";
export const id="dl_9c4f1034d4d94b50b32c";
export const url=new URL("../icons/lucid_1-book-up-2.svg?v=927cfad1b6f886703e6fe9cab3623b0d6d31a35418afc45b7f0aae2681d47015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
