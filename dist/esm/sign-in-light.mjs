export const name="sign-in-light";
export const id="dl_0ce93a32c775e2eb0fe8";
export const url=new URL("../icons/sign-in-light.svg?v=7cbfe6ef9de43a0de5ae1be60d32381f1ef1965851fe837c0e89ad7ce778b21f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
