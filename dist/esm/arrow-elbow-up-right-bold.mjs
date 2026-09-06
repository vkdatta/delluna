export const name="arrow-elbow-up-right-bold";
export const id="dl_b354424976e64e78b80b";
export const url=new URL("../icons/arrow-elbow-up-right-bold.svg?v=61aaadb200365273b1e62f1fb3e6c35d99152c05c41f81c3f4c828dcf5856b17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
