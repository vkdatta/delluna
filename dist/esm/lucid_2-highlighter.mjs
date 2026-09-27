export const name="lucid_2-highlighter";
export const id="dl_7f9d97f3ccf24933a9b6";
export const url=new URL("../icons/lucid_2-highlighter.svg?v=8985f60b8aaffa96ffb0c445921d7ec5e3c294d73863e0f43f5b00f99b5ece28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
