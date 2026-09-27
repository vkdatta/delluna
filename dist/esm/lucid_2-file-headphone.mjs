export const name="lucid_2-file-headphone";
export const id="dl_3bf0f8cec5d2457fbbbc";
export const url=new URL("../icons/lucid_2-file-headphone.svg?v=e62d4780c437f72e55af31eef2da7ba8fd3850b48621eb54884b2962e340414b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
