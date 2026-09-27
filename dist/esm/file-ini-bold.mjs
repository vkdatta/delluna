export const name="file-ini-bold";
export const id="dl_51352d07ac26499188ca";
export const url=new URL("../icons/file-ini-bold.svg?v=ca757dae1d35adb0ac59c0ea3f63f3a7289256ad09108ea5e961781f9252a51a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
