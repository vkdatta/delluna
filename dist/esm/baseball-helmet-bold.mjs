export const name="baseball-helmet-bold";
export const id="dl_4d556c7e345f472ca427";
export const url=new URL("../icons/baseball-helmet-bold.svg?v=17b6f1a13be33ae628eaab8f1adb93d474ed4cefb908452cfd51593db11a6203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
