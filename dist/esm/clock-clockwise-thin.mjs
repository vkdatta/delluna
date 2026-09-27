export const name="clock-clockwise-thin";
export const id="dl_85a5a37e7b0c498eb946";
export const url=new URL("../icons/clock-clockwise-thin.svg?v=dc22f0c92df474c6328e2e930a6058466d4cf6d46b4253c9a8eabc2a6694ce3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
