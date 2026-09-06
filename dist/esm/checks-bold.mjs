export const name="checks-bold";
export const id="dl_0ea8b8eb6e5842b1b175";
export const url=new URL("../icons/checks-bold.svg?v=ecd08cd342446630311d76513a40706d1bc540837e7d630a54777dcb66a22ed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
