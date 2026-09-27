export const name="arrows-merge-thin";
export const id="dl_b34d7dcbba7549ea9696";
export const url=new URL("../icons/arrows-merge-thin.svg?v=a7ea02f0f4cd230d9322c5442fd1d57867549f768c22f9d5eeef9bec1e68a0f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
