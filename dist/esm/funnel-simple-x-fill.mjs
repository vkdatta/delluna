export const name="funnel-simple-x-fill";
export const id="dl_27426ff05cdb4f7e9921";
export const url=new URL("../icons/funnel-simple-x-fill.svg?v=f9a7ebcabeffb66a37980fe816d1d8825213101be3ffa40b288c4fb9ca048b52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
