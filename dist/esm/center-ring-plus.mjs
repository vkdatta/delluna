export const name="center-ring-plus";
export const id="dl_fb7ad4b77bc6b897a30e";
export const url=new URL("../icons/center-ring-plus.svg?v=8e14700d62b9faecfd5f83701bc04f38223f0c53725f912ba168950d8670c378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
