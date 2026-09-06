export const name="lucid_3-message-square";
export const id="dl_4a5e4317264148b5b9aa";
export const url=new URL("../icons/lucid_3-message-square.svg?v=49792f6798cef527d718854e4350c7ebf80196ddb441f9519d24a60c7a65bc5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
