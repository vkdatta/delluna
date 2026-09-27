export const name="text-strikethrough-bold";
export const id="dl_83eec4cd98903648d679";
export const url=new URL("../icons/text-strikethrough-bold.svg?v=470fe2d2b708f077e07239ca1c6e66863cb36328a383acf41800d2ac69744505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
