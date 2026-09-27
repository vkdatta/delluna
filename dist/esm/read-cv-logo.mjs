export const name="read-cv-logo";
export const id="dl_a4a9f503d366421b9af1";
export const url=new URL("../icons/read-cv-logo.svg?v=c98cc7086394095224dac38314daef5cfb6fb1ba7c71633be99f4e908ca2d9f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
