export const name="mobile_tap";
export const id="dl_72ebf8f4fb4a6871c808";
export const url=new URL("../icons/mobile_tap.svg?v=01f4c83ac260f0d65877bec07a873505cf1145108a4d15981830c295571c36aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
