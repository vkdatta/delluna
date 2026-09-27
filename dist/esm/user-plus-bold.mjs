export const name="user-plus-bold";
export const id="dl_790ec9db1cdf812c54fd";
export const url=new URL("../icons/user-plus-bold.svg?v=f93b15fd1576d913fa26773018e828d5ac625b6f2ea61239a0564612569d4dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
