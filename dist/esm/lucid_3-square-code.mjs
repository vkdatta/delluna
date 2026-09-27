export const name="lucid_3-square-code";
export const id="dl_8df681bbd56b40b783d5";
export const url=new URL("../icons/lucid_3-square-code.svg?v=dcf173648ede617201013bfccd8ad32f2f6471f3cf75c9117be91c09f09f7701",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
