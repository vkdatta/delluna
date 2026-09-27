export const name="greater-than-or-equal-bold";
export const id="dl_562230bebc724aa6bee8";
export const url=new URL("../icons/greater-than-or-equal-bold.svg?v=b41b339d49e8a5265ff6547a5b408f00a5ba9215f28985dd90df0fb182d80554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
