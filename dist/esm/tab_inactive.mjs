export const name="tab_inactive";
export const id="dl_01599aca7ee947dacc13";
export const url=new URL("../icons/tab_inactive.svg?v=fca9eaabed912de9861390e530d249840dfeb4d491aafc76d4536f6a3916ac44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
