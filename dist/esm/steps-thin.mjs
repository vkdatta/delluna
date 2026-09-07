export const name="steps-thin";
export const id="dl_182a2051cd154181b991";
export const url=new URL("../icons/S/steps-thin.svg?v=5f9153b9501a4d5f7ffb481a0c4d692d7b36f7ef8b8d8bd03a1a4409ed21769a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
