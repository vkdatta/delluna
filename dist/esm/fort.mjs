export const name="fort";
export const id="dl_6df0cfa8078644039ac5";
export const url=new URL("../icons/fort.svg?v=2af6ec22ddd67befd16eba30745c718b9557a4bf78067ac5cd143421c8650a4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
