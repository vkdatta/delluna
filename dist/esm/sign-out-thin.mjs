export const name="sign-out-thin";
export const id="dl_5ac605cb7e2749e4591c";
export const url=new URL("../icons/sign-out-thin.svg?v=769ed0e6514c69990a8a3ec2d015b7cfda23fd730d5c5fda18a4870e09e322dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
