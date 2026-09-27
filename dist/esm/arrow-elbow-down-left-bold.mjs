export const name="arrow-elbow-down-left-bold";
export const id="dl_ab5c2e4d8a6248fcb2c2";
export const url=new URL("../icons/arrow-elbow-down-left-bold.svg?v=f8e3a905e5e2d49d9df9db6f6a3b8a167fd35cd9d69e505b4ada61c810d35f95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
