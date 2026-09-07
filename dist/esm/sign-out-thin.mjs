export const name="sign-out-thin";
export const id="dl_d4f5c64c266a4c3e9a6d";
export const url=new URL("../icons/S/sign-out-thin.svg?v=769ed0e6514c69990a8a3ec2d015b7cfda23fd730d5c5fda18a4870e09e322dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
