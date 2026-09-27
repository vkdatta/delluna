export const name="sign-out-bold";
export const id="dl_764a6f26ce411db6c81b";
export const url=new URL("../icons/sign-out-bold.svg?v=b4207565651bc6c1312a179cdc69eaa5cbad37e8694f9158126829ee6a70e0ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
