export const name="sign-out-bold";
export const id="dl_9cc4b5c4a5bc475cab02";
export const url=new URL("../icons/S/sign-out-bold.svg?v=7e7a96557804b578ec40ce2365f4bcea7c8fdec4f49068724d27fc03272d0156",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
