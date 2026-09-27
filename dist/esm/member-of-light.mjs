export const name="member-of-light";
export const id="dl_15b94929617548cbbfc4";
export const url=new URL("../icons/member-of-light.svg?v=fc047f5510ade606318671c4cf0719e4e2f63b50db17373ec4d58ebfe4205c7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
