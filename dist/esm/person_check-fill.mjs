export const name="person_check-fill";
export const id="dl_d69eabdd4e204a8d8c21";
export const url=new URL("../icons/P/person_check-fill.svg?v=a002100de2351f9aa86ba3eaec873a82fe22a71d428c7c7d85569b3f42b39223",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
