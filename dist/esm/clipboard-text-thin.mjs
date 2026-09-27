export const name="clipboard-text-thin";
export const id="dl_4031d8dfdb954832852e";
export const url=new URL("../icons/clipboard-text-thin.svg?v=af54697bb0b8b838adb3bf1bf70dd8b8ec212bef9eaef0dcce68716fd8459bf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
