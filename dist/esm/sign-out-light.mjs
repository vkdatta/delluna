export const name="sign-out-light";
export const id="dl_7adb6b63e3c5de2429fe";
export const url=new URL("../icons/sign-out-light.svg?v=07aa4906afcda6a75412032b019e441b162c0f2c92fa42f4b9306df4377ecf3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
