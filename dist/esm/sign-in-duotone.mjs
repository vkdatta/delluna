export const name="sign-in-duotone";
export const id="dl_b7629f05a876d146c3a8";
export const url=new URL("../icons/sign-in-duotone.svg?v=7c6eed5b4fce7a1055469419be87e8940ae582dff68efe66a8540e1475c9aee4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
