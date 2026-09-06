export const name="gender-male-thin";
export const id="dl_d16048be3f0b4363a386";
export const url=new URL("../icons/gender-male-thin.svg?v=50c07a976063b73e5aedddd9448fa8cbe4dcf97f51925b22bb67b2d21903e010",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
