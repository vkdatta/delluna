export const name="framer-logo";
export const id="dl_756cd161b97d4213a0e1";
export const url=new URL("../icons/framer-logo.svg?v=ed59bec8e6a52c8f097cf605bdaeeb94f29e6b3ba244135187c6716028f9fa87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
