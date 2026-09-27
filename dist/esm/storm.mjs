export const name="storm";
export const id="dl_7e98aa597d7e40d28f7b";
export const url=new URL("../icons/storm.svg?v=4cda0bdaa1f8064c47757541b645bcc9d0ad54030e47f4aa74c668dd88f2d5f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
