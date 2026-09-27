export const name="lucid_1-brick-wall-shield";
export const id="dl_68ffe1d471634b47a1b7";
export const url=new URL("../icons/lucid_1-brick-wall-shield.svg?v=90b85826009857a37e5ce35ea2d5e13dc6446c632a40ca942e2d1ebd1aa8110b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
