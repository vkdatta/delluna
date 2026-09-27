export const name="align-bottom-simple";
export const id="dl_5d0ba48ae98c44a0aeda";
export const url=new URL("../icons/align-bottom-simple.svg?v=8161b279ad68a28be33c1df1501520e9678b6cae88f5413a65ac82c8a22f0847",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
