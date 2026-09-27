export const name="speaker-slash-thin";
export const id="dl_88f8b47b7fbcbc6ade33";
export const url=new URL("../icons/speaker-slash-thin.svg?v=02d0d5dfc2ad15600cdf573730aa3db9147d6dcc98fff6ed6404222fc39057e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
