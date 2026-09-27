export const name="phone-plus";
export const id="dl_4e62e4f3fc954b13ac8f";
export const url=new URL("../icons/phone-plus.svg?v=9271ef88041371bd074354dfa5d46890b7e1af07c789b07d75e4652f31899846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
