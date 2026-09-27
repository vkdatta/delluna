export const name="lucid_1-circle-percent";
export const id="dl_21e444aaf07a4b5cbec2";
export const url=new URL("../icons/lucid_1-circle-percent.svg?v=442a909280559015433ccfb9b7feaa6a55936fde73aab365fc9d535684f4022e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
