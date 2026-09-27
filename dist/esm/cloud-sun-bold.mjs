export const name="cloud-sun-bold";
export const id="dl_dce926d2138a49489550";
export const url=new URL("../icons/cloud-sun-bold.svg?v=68f80b33eed9f05bff169713f7da677ed7bc9ac3554c10b02d0054e1c629e55b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
