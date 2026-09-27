export const name="lucid_1-bean-off";
export const id="dl_2e1e47c71cbb43c08fa9";
export const url=new URL("../icons/lucid_1-bean-off.svg?v=e29d7451f884859fdc9efd3b3cfb3c3ec517964b6c3e47dce29385a4c6b4f57a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
