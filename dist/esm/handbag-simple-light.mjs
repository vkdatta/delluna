export const name="handbag-simple-light";
export const id="dl_1d850e04067c454bba78";
export const url=new URL("../icons/handbag-simple-light.svg?v=d5375c27ea68928460c5d4345f0d6e7c22fc4d58807d4ad3949b71d2f3f791c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
