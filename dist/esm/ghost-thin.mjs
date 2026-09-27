export const name="ghost-thin";
export const id="dl_9306b7daf50b4f25afcb";
export const url=new URL("../icons/ghost-thin.svg?v=a86b492c7ae98740e85b0cd1276d9db963f6c26e0cdbf263a4ced1eae6b4f224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
