export const name="user-thin";
export const id="dl_a14a2113df97348e52bc";
export const url=new URL("../icons/user-thin.svg?v=980c80c796ad4ffae727a1219d3ca06b8e8c14a13ebff51a9b22dd2021ef9eac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
