export const name="code_xml";
export const id="dl_70badb52c68f772ffd99";
export const url=new URL("../icons/code_xml.svg?v=7ed3ea3bfc8f613fbc39b2ded1e5d75e24538bdb9d31e828ab7524c8aa154770",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
