export const name="orange-bold";
export const id="dl_f9e5a4dba8b8480194f8";
export const url=new URL("../icons/orange-bold.svg?v=633bcbd3dacc2c63a0b4422fc00c626a6f6319471800bf14129e6962c0b743e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
