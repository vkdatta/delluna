export const name="arrow-u-up-right-fill";
export const id="dl_2e8e933873b94d75b4b7";
export const url=new URL("../icons/arrow-u-up-right-fill.svg?v=751436c1731bc28e79d3a29f0bf00c82911375f0c737690e8862cc6d045724a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
