export const name="lucid_2-dot";
export const id="dl_4913e895bf24418b8cb2";
export const url=new URL("../icons/lucid_2-dot.svg?v=b01b5f60b61e26dc6e0550f05e1559a4e795e9d69d2c2ad65a39fae291dc4ec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
