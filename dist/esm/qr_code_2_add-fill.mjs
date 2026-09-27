export const name="qr_code_2_add-fill";
export const id="dl_c5b1caec2955168c277c";
export const url=new URL("../icons/qr_code_2_add-fill.svg?v=12bd726ef49493fa65335d2bc6cc72ec1c2b4d9e7a46d6801e318b3471168561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
